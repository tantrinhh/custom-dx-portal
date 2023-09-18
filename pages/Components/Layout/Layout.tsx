import Head from "next/head";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutPageProps = {
  children?: React.ReactNode;
};
const LayoutPage = ({ children }: LayoutPageProps) => {
  return (
    <>
      <Header />

      {children}
      <Footer />
    </>
  );
};

export default LayoutPage;
