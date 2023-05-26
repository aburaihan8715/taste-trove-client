import React from "react";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-[calc(100vh-324px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
