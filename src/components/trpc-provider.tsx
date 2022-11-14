"use client";
import type { FC, PropsWithChildren } from "react";
import { Fragment } from "react";
import { trpc } from "../utils/trpc";

const InnerProvider = trpc.withTRPC(({ Component, pageProps }) => {
  return <Component {...pageProps} />;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any; // TODO better

const TrpcProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <InnerProvider
      Component={Fragment}
      pageProps={{
        children,
      }}
    />
  );
};

export default TrpcProvider;
