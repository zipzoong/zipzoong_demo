"use client";

import React from "react";
import MainCarousel from "./content/mainCarousel";
import CategoryList from "./content/category";
import PopularService from "./content/popularService";
import Info from "./content/info";

const HomePage = () => {
  return (
    <>
      <MainCarousel />
      <CategoryList />
      <PopularService />
      <Info />
    </>
  );
};

export default HomePage;
