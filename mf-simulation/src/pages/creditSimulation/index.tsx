import { MainLayout } from "@/components/layouts/MainLayout";
import { NextPageWithLayout } from "../_app";
import CreditSimulationComponent from "@/components/creditSimulation";


const CreditSimulationPage: NextPageWithLayout = () => {
  return (
    <>
      <CreditSimulationComponent/>
    </>
  );
};
export default CreditSimulationPage;
