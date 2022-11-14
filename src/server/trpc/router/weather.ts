import type { WeatherKitResponse } from "../../../utils/weather-kit-types";
import { publicProcedure, router } from "../trpc";
import { z } from "zod";
import { env } from "../../../env/server.mjs";

export const weatherRouter = router({
  get: publicProcedure
    .input(
      z
        .object({
          latitude: z.string(),
          longitude: z.string(),
        })
        .required()
    )
    .query(async ({ input: { latitude, longitude } }) => {
      const language = "en-US";
      const weatherResponse = await fetch(
        `https://weatherkit.apple.com/api/v1/weather/${language}/${latitude}/${longitude}?dataSets=currentWeather,forecastNextHour,forecastHourly,forecastDaily`,
        {
          headers: {
            Authorization: `Bearer ${env.WEATHER_KIT_TOKEN}`,
          },
        }
      );
      const weather = (await weatherResponse.json()) as WeatherKitResponse;
      return weather;
    }),
});
