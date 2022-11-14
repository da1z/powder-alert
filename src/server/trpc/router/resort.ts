import { publicProcedure, router } from "../trpc";

export const resortRouter = router({
  all: publicProcedure.query(async ({ ctx }) => {
    const resorts = await ctx.prisma.resort.findMany();
    return resorts;
  }),
});
