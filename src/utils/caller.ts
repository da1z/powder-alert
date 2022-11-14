import { createContextInner } from "../server/trpc/context";
import { appRouter } from "../server/trpc/router/_app";

export const createCaller = async () =>
  appRouter.createCaller(await createContextInner({}));
