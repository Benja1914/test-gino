import React from "react";
import { NextPage } from "next";
import "../globals.css";
import { ReactElement, ReactNode } from "react";
import { Storelayout } from "@/components/layouts/StoreLayout";
import { MainLayout } from "@/components/layouts/MainLayout";


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = any & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return getLayout(
    <>
      <Storelayout>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Storelayout>
    </>
  );
}
