import { ReactElement, useEffect } from "react";
import { MainLayout } from "@/components/layouts/MainLayout.";
import dynamic from "next/dynamic";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import AuthGuard from "@/guard/AuthGuard";
import { PrimaryCircularProgress } from "ara-crom-components-lib";

export default function IndexPage() {
  return (
    <>
      <ContainerLayout>
      </ContainerLayout>
    </>
  );
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthGuard>{page}</AuthGuard>
  );
};
