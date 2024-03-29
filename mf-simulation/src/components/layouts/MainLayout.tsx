import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

// import "./../../globals.css";

export const metadata = {
  title: "Caja la Araucana",
  description: "Generated by create next app",
};

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
      <div>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.title} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>{children}</main>
      </div>
  );
};
