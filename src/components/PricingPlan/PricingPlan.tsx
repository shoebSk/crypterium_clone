import React, { useEffect } from "react";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import BTC from "../../assets/icons/btc.png";
import RIPPLE from "../../assets/icons/ripple.png";
import Aos from "aos";
import "aos/dist/aos.css";
import MONERO from "../../assets/icons/monero.png";
import { FlexBox } from "../../shared/FlexBox/Flexbox";
import { LogoImage } from "../Header/headerStyles";
import {
  FreeSetupDiv,
  PricingPanelDiv,
  PricingPanelWrapper,
  PricingTab,
  PricingTabContainer,
  PricingTabContentDiv,
} from "./PricingPanelStyle";
import { PrimaryButton } from "../../shared/Button/Button";

const PricingPlan = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <PricingPanelWrapper>
      <PricingPanelDiv marginBottom="60px" maxWidth="520px" margin="0 auto">
        <BannerHeader
          fontSize="17px"
          fontWeight="100"
          marginbottom="2rem"
          textAlign="center">
          PRICING PLANS
        </BannerHeader>

        <BannerHeader
          maxWidth="60px"
          margin="0 auto"
          textAlign="center"
          fontSize="40px"
          fontWeight="600"
          marginbottom="0"
          color="black">
          Crypto Mining Farm Pricing Plans
        </BannerHeader>
      </PricingPanelDiv>
      <PricingPanelDiv marginBottom="4rem">
        <FlexBox margin="0 0 4rem 0">
          <FlexBox className="mining-plans">
            <a href="#">
              <LogoImage filter="grayscale(1)" width="25px" src={BTC} alt="" />
            </a>
            <BannerHeader
              fontSize="17px"
              cursor="pointer"
              fontWeight="400"
              marginbottom="0"
              margin="0 2rem 0 1rem">
              Bitcoin
            </BannerHeader>
          </FlexBox>
          <FlexBox className="mining-plans">
            <a href="#">
              <LogoImage
                filter="grayscale(0)"
                width="25px"
                src={MONERO}
                alt=""
              />
            </a>
            <BannerHeader
              fontSize="17px"
              fontWeight="400"
              cursor="pointer"
              marginbottom="0"
              margin="0 2rem 0 1rem">
              Monero
            </BannerHeader>
          </FlexBox>
          <FlexBox className="mining-plans">
            <a href="#">
              <LogoImage
                filter="grayscale(1)"
                width="25px"
                src={RIPPLE}
                alt=""
              />
            </a>
            <BannerHeader
              cursor="pointer"
              fontSize="17px"
              fontWeight="400"
              marginbottom="0"
              margin="0 2rem 0 1rem">
              Ripple
            </BannerHeader>
          </FlexBox>
        </FlexBox>
        <PricingTabContainer>
          <PricingTab
            borderColor="#4262c1"
            border="5px solid"
            data-aos="flip-left">
            <div>
              <BannerHeader
                fontSize="30px"
                fontWeight="500"
                marginbottom="0"
                color="black">
                Basic
              </BannerHeader>
              <BannerHeader
                fontSize="35px"
                fontWeight="600"
                marginbottom="0"
                color="#4262c1">
                Free
              </BannerHeader>
            </div>
            <PricingTabContentDiv margin="45px 0 50px 0">
              <BannerHeader
                color="black"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0">
                0.5 KH/s
              </BannerHeader>
              <FreeSetupDiv>FREE SETUP</FreeSetupDiv>

              <BannerHeader fontSize="15px" fontWeight="400" marginbottom="0">
                Maintenance Fees per GH/s/day
              </BannerHeader>
              <BannerHeader
                color="black"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0">
                $ 0.299
              </BannerHeader>
              <BannerHeader fontSize="17px" fontWeight="400" marginbottom="0">
                Contract Duration
              </BannerHeader>
              <BannerHeader
                color="black"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0">
                24 Months
              </BannerHeader>
            </PricingTabContentDiv>
            <div>
              <PrimaryButton
                bgColor="#4262c1"
                hoverColor="#325cd7"
                fontSize="15px"
                width="185px"
                padding="18px 30px 18px 30px">
                Get Started
              </PrimaryButton>
            </div>
          </PricingTab>
          <PricingTab
            borderColor="#694e96"
            border="5px solid"
            data-aos="flip-left">
            <div>
              <BannerHeader
                fontSize="30px"
                fontWeight="500"
                marginbottom="0"
                color="black">
                Standard
              </BannerHeader>
              <BannerHeader
                fontSize="35px"
                fontWeight="600"
                marginbottom="0"
                color="#694e96">
                9.99$/mo
              </BannerHeader>
            </div>
            <PricingTabContentDiv margin="45px 0 50px 0">
              <BannerHeader
                fontSize="17px"
                fontWeight="400"
                color="black"
                marginbottom="0">
                0.5 KH/s
              </BannerHeader>
              <FreeSetupDiv>FREE SETUP</FreeSetupDiv>

              <BannerHeader fontSize="15px" fontWeight="400" marginbottom="0">
                Maintenance Fees per GH/s/day
              </BannerHeader>
              <BannerHeader
                color="black"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0">
                $ 0.299
              </BannerHeader>
              <BannerHeader fontSize="17px" fontWeight="400" marginbottom="0">
                Contract Duration
              </BannerHeader>
              <BannerHeader
                color="black"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0">
                24 Months
              </BannerHeader>
            </PricingTabContentDiv>
            <div>
              <PrimaryButton
                bgColor="#694e96"
                hoverColor="#673cae"
                fontSize="15px"
                width="185px"
                padding="18px 30px 18px 30px">
                Get Started
              </PrimaryButton>
            </div>
          </PricingTab>
          <PricingTab
            data-aos="flip-left"
            padding="115px 25px 40px"
            borderColor="#4262c1"
            bgColor="#43c1a8"
            boxShadow="0 3px 40px rgb(0 0 0 / 18%)">
            <div className="cross-text">Best match</div>
            <div>
              <BannerHeader
                fontSize="30px"
                fontWeight="500"
                marginbottom="0"
                color="#fff">
                Optima
              </BannerHeader>
              <BannerHeader
                fontSize="35px"
                fontWeight="600"
                marginbottom="0"
                color="#fff">
                29.99$/mo
              </BannerHeader>
            </div>
            <PricingTabContentDiv margin="45px 0 50px 0">
              <BannerHeader
                color="#fff"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0">
                0.5 KH/s
              </BannerHeader>
              <FreeSetupDiv bgColor="#fff">FREE SETUP</FreeSetupDiv>

              <BannerHeader
                fontSize="15px"
                fontWeight="400"
                marginbottom="0"
                color="#fff">
                Maintenance Fees per GH/s/day
              </BannerHeader>
              <BannerHeader
                color="#fff"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0">
                $ 0.299
              </BannerHeader>
              <BannerHeader
                color="#fff"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0">
                Contract Duration
              </BannerHeader>
              <BannerHeader
                color="#fff"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0">
                24 Months
              </BannerHeader>
            </PricingTabContentDiv>
            <div>
              <PrimaryButton
                color="black"
                bgColor="#fff"
                hoverColor="#292b30"
                fontSize="15px"
                hoverFontColor="#fff"
                width="185px"
                padding="18px 30px 18px 30px">
                Get Started
              </PrimaryButton>
            </div>
          </PricingTab>
          <PricingTab
            borderColor="#fb395e"
            border="5px solid"
            data-aos="flip-left">
            <div>
              <BannerHeader
                fontSize="30px"
                fontWeight="500"
                marginbottom="0"
                color="black">
                Basic
              </BannerHeader>
              <BannerHeader
                fontSize="35px"
                fontWeight="600"
                marginbottom="0"
                color="#4262c1">
                Free
              </BannerHeader>
            </div>
            <PricingTabContentDiv margin="45px 0 50px 0">
              <BannerHeader
                fontSize="17px"
                fontWeight="400"
                color="black"
                marginbottom="0">
                0.5 KH/s
              </BannerHeader>
              <FreeSetupDiv>FREE SETUP</FreeSetupDiv>

              <BannerHeader fontSize="15px" fontWeight="400" marginbottom="0">
                Maintenance Fees per GH/s/day
              </BannerHeader>
              <BannerHeader
                color="black"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0">
                $ 0.299
              </BannerHeader>
              <BannerHeader fontSize="17px" fontWeight="400" marginbottom="0">
                Contract Duration
              </BannerHeader>
              <BannerHeader
                color="black"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0">
                24 Months
              </BannerHeader>
            </PricingTabContentDiv>
            <div>
              <PrimaryButton
                bgColor="#fb395e"
                fontSize="15px"
                hoverColor="#ff3b60"
                width="185px"
                padding="18px 30px 18px 30px">
                Get Started
              </PrimaryButton>
            </div>
          </PricingTab>
        </PricingTabContainer>
      </PricingPanelDiv>
    </PricingPanelWrapper>
  );
};

export default PricingPlan;
