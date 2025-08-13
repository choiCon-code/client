import React from "react";
import PropTypes from "prop-types";
import Sliders from "./Sliders";
import Banners from "./Banners";
import BannersTab from "./BannersTab";
import PopularProducts from "./PopularProducts";

function Home() {


  
  return (
    <div className="container mx-auto mt-6">
      <div className="flex gap-4 ml-[270px]">
        <Sliders />
        <Banners />
      </div>
      <BannersTab />

      <div className="mt-10">
        <PopularProducts />
      </div>

      <div className="h-screen"></div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
