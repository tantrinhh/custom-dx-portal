import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const LayoutPage = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutPage;
