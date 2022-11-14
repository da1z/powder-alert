import "server-only";
import { resorts as data } from "../data/resorts";
import { ResortCard } from "./resort-card";

const getResorts = async () => {
  const caResorts = data
    .filter(({ state }) => state === "California")
    .filter(
      ({ resortName }) =>
        resortName === "Mammoth Mountain" ||
        resortName === "Snow Summit" ||
        resortName === "Bear Mountain" ||
        resortName === "June Mountain"
    );
  return caResorts;
};

const Home = async () => {
  const resorts = await getResorts();
  return (
    <main className="container mx-auto flex flex-col items-center justify-center  p-4">
      <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
        Powder <span className="text-purple-300">Alert</span>
      </h1>
      <div className="flex w-full flex-col items-center gap-4 px-2">
        {resorts?.slice(0, 100).map((resort) => (
          <ResortCard key={resort.resortName} resort={resort} />
        ))}
      </div>
    </main>
  );
};

export default Home;
