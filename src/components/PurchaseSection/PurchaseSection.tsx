import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import {
  PriceTag,
  PurchaseSectionContainer,
  PurchaseSectionWrapper,
} from "./PurchaseSectionStyle";

const PurchaseSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <PurchaseSectionWrapper>
      <PurchaseSectionContainer>
        <PriceTag>
          <span>$150</span>
        </PriceTag>
        <div data-aos="fade-right">
          <BannerHeader fontSize="17px" fontWeight="100" marginbottom="0">
            EQUIPMENT
          </BannerHeader>

          <BannerHeader
            fontSize="40px"
            fontWeight="600"
            marginbottom="30px"
            color="black">
            Upon purchase of TI-miner (Top) GPU 4 Radeon RX 470
          </BannerHeader>

          <BannerHeader fontSize="17px" fontWeight="100" marginbottom="0">
            - 6 months of free allocation in data center;
          </BannerHeader>
          <BannerHeader fontSize="17px" fontWeight="100" marginbottom="0">
            - 6 months of warranty service
          </BannerHeader>
          <BannerHeader fontSize="17px" fontWeight="100" marginbottom="0">
            - 6 months of 24/7 technical support;
          </BannerHeader>
          <BannerHeader fontSize="17px" fontWeight="100" marginbottom="0">
            - 6 months without no expenses on electricity
          </BannerHeader>
        </div>
      </PurchaseSectionContainer>
    </PurchaseSectionWrapper>
  );
};

export default PurchaseSection;
