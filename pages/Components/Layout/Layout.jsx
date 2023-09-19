import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
const LayoutPage = ({ title, children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutPage;
