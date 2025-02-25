"use client";

import React, { useEffect } from "react";
import MainCarousel from "./content/mainCarousel";
import CategoryList from "./content/category";
import PopularService from "./content/popularService";
import Info from "./content/info";
import MainSection from "./content/mainSection";
import { getMainMatching } from "@/app/api/main/api";

const HomePage = () => {
  useEffect(() => {
    const fetchMain = async () => {
      try {
        const data = await getMainMatching();
        console.log(data);
      } catch (err) {
        console.log;
      } finally {
      }
    };

    fetchMain();
  }, []);

  return (
    <>
      <MainCarousel />
      <MainSection />
      <CategoryList />
      <PopularService />
      <Info />
    </>
  );
};

export default HomePage;
