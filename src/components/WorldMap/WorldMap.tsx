import React from "react";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import { WorldMapWrapper, WroldMapContainer } from "./WorldMapStyle";

const WorldMap = () => {
  return (
    <WroldMapContainer>
      <div className="map-content">
        <BannerHeader
        color='#fff'
          fontSize="17px"
          fontWeight="100"
          marginbottom="2rem"
          textAlign="center">
          WE ARE IN THE WORLD
        </BannerHeader>
        <BannerHeader
          maxWidth="60px"
          margin="0 auto"
          textAlign="center"
          fontSize="40px"
          fontWeight="600"
          color="#fff">
          We have Users all Over the World
        </BannerHeader>
      </div>
      <div>
        <WorldMapWrapper />
      </div>
    </WroldMapContainer>
  );
};

export default WorldMap;
