import React from "react";
import { ContinueSection } from "../RightHand/Continue";
import { CollectionSection } from "../RightHand/CollectionSection";
import { GenresSection } from "../RightHand/GenresSection";
import Carousel from "../Home/Carousel";
import { Popular } from "../Popular/Popular";
import Suggested from "../Suggested/Suggested";

const Main = () => {
  return (
    <div className="flex">
      <div className="w-[70%]">
        <Carousel />
        <Popular />
        <Suggested />
      </div>
      <div className="w-[30%] flex flex-col bottom-0">
        <ContinueSection />
        <CollectionSection />
        <GenresSection />
      </div>
    </div>
  );
};

export default Main;
