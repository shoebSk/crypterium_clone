import React from "react";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import { LogoImage } from "../Header/headerStyles";
import {
  MiningFarmDiv,
  MiningFarmWrapper,
} from "../MiningFarm/MiningFarmStyle";
import { ThreeColumnGridImage } from "./MiningPartnerStyle";

const MiningPartner = () => {
  return (
    <MiningFarmWrapper gap='6rem'>
      <MiningFarmDiv width="35%">
        <BannerHeader fontSize="17px" fontWeight="100" marginbottom="0">
          WHO HELPS US
        </BannerHeader>

        <BannerHeader
          fontSize="40px"
          fontWeight="600"
          marginbottom="0"
          color="black">
          Mining Farm Partners
        </BannerHeader>
      </MiningFarmDiv>
      <ThreeColumnGridImage>
        <LogoImage
          width="155px"
          src="https://demo.artureanec.com/html/crypterium/img/logos_img/15.png"
        />
        <LogoImage
          width="155px"
          src="https://demo.artureanec.com/html/crypterium/img/logos_img/14.png"
        />
        <LogoImage
          width="155px"
          src="https://demo.artureanec.com/html/crypterium/img/logos_img/19.png"
        />
        <LogoImage
          width="155px"
          src="https://demo.artureanec.com/html/crypterium/img/logos_img/16.png"
        />
        <LogoImage
          width="155px"
          src="https://demo.artureanec.com/html/crypterium/img/logos_img/17.png"
        />
        <LogoImage
          width="155px"
          src="https://demo.artureanec.com/html/crypterium/img/logos_img/18.png"
        />
      </ThreeColumnGridImage>
    </MiningFarmWrapper>
  );
};

export default MiningPartner;
