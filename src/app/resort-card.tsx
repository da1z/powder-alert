"use client";
import type { Resort } from "../data/resorts";
import { trpc } from "../utils/trpc";

interface ResortCardProps {
  resort: Resort;
}

export const ResortCard = ({ resort }: ResortCardProps) => {
  const weather = trpc.weather.get.useQuery(
    {
      latitude: resort.latitude.toString(),
      longitude: resort.longitude.toString(),
    },
    {}
  );

  return (
    <section
      key={resort.resortName}
      className="w-full max-w-lg border border-white p-4"
    >
      <div className="flex justify-between">
        <div>
          <div className="font-semibold text-slate-200">
            {resort.resortName}
          </div>
          <div>{resort.city}</div>
          <div>{weather.data?.currentWeather.conditionCode}</div>
        </div>
        <div>
          {Math.round(weather.data?.currentWeather.temperature ?? 0)}&deg;
        </div>
      </div>
    </section>
  );
};
