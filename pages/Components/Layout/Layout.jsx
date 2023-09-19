import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
const LayoutPage = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta name="robots" content="" />
        <meta name="description" content="" />
        <link rel="icon" href="images/logo-light.png" type="image/x-icon" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="images/logo-light.png"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutPage;
