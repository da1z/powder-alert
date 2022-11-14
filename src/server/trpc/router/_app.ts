import { router } from "../trpc";
import { resortRouter } from "./resort";
import { weatherRouter } from "./weather";

export const appRouter = router({
  resort: resortRouter,
  weather: weatherRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
