import React from "react";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import BTC from "../../assets/icons/btc.png";
import RIPPLE from "../../assets/icons/ripple.png";
import MONERO from "../../assets/icons/monero.png";
import { FlexBox } from "../../shared/FlexBox/Flexbox";
import { LogoImage } from "../Header/headerStyles";
import { FreeSetupDiv, PricingPanelDiv, PricingPanelWrapper, PricingTab, PricingTabContainer, PricingTabContentDiv } from "./PricingPanelStyle";
import { PrimaryButton } from "../../shared/Button/Button";

const PricingPlan = () => {
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
        <FlexBox margin='0 0 4rem 0'>
          <FlexBox>
            <a href="#">
              <LogoImage width="25px" src={BTC} alt="" />
            </a>
            <BannerHeader
              fontSize="17px"
              fontWeight="400"
              marginbottom="0"
              margin="0 2rem 0 1rem">
              Bitcoin
            </BannerHeader>
          </FlexBox>
          <FlexBox>
            <a href="#">
              <LogoImage width="25px" src={MONERO} alt="" />
            </a>
            <BannerHeader
              fontSize="17px"
              fontWeight="400"
              marginbottom="0"
              margin="0 2rem 0 1rem">
              Monero
            </BannerHeader>
          </FlexBox>
          <FlexBox>
            <a href="#">
              <LogoImage width="25px" src={RIPPLE} alt="" />
            </a>
            <BannerHeader
              fontSize="17px"
              fontWeight="400"
              marginbottom="0"
              margin="0 2rem 0 1rem">
              Ripple
            </BannerHeader>
          </FlexBox>
        </FlexBox>
        <PricingTabContainer>
          <PricingTab borderColor="#4262c1" border='5px solid'>
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
            <PricingTabContentDiv margin='45px 0 50px 0'>
              <BannerHeader
              color='black'
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                0.5 KH/s
              </BannerHeader>
              <FreeSetupDiv>FREE SETUP</FreeSetupDiv>

              <BannerHeader
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                Maintenance Fees per GH/s/day
              </BannerHeader>
              <BannerHeader
                color="black"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                $ 0.299
              </BannerHeader>
              <BannerHeader
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                Contract Duration
              </BannerHeader>
              <BannerHeader
                color="black"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                24 Months
              </BannerHeader>
            </PricingTabContentDiv>
            <div>
              <PrimaryButton
                bgColor="#4262c1"
                fontSize="15px"
                width="185px"
                padding="18px 30px 18px 30px">
                Get Started
              </PrimaryButton>
            </div>
          </PricingTab>
          <PricingTab borderColor="#694e96"  border='5px solid'>
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
            <PricingTabContentDiv margin='45px 0 50px 0'>
              <BannerHeader
                fontSize="17px"
                fontWeight="400"
                color='black'
                marginbottom="0"
               >
                0.5 KH/s
              </BannerHeader>
              <FreeSetupDiv>FREE SETUP</FreeSetupDiv>

              <BannerHeader
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                Maintenance Fees per GH/s/day
              </BannerHeader>
              <BannerHeader
                color="black"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                $ 0.299
              </BannerHeader>
              <BannerHeader
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                Contract Duration
              </BannerHeader>
              <BannerHeader
                color="black"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                24 Months
              </BannerHeader>
            </PricingTabContentDiv>
            <div>
              <PrimaryButton
                bgColor="#694e96"
                fontSize="15px"
                width="185px"
                padding="18px 30px 18px 30px">
                Get Started
              </PrimaryButton>
            </div>
          </PricingTab>
          <PricingTab padding='115px 25px 40px' borderColor="#4262c1" bgColor='#43c1a8' boxShadow='0 3px 40px rgb(0 0 0 / 18%)'>
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
            <PricingTabContentDiv margin='45px 0 50px 0'>
              <BannerHeader
               color="#fff"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                0.5 KH/s
              </BannerHeader>
              <FreeSetupDiv bgColor='#fff'>FREE SETUP</FreeSetupDiv>

              <BannerHeader
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
                color="#fff"
               >
                Maintenance Fees per GH/s/day
              </BannerHeader>
              <BannerHeader
                color="#fff"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                $ 0.299
              </BannerHeader>
              <BannerHeader
               color="#fff"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                Contract Duration
              </BannerHeader>
              <BannerHeader
                color="#fff"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                24 Months
              </BannerHeader>
            </PricingTabContentDiv>
            <div>
              <PrimaryButton
              color='black'
                bgColor="#fff"
                fontSize="15px"
                width="185px"
                padding="18px 30px 18px 30px">
                Get Started
              </PrimaryButton>
            </div>
          </PricingTab>
          <PricingTab borderColor="#fb395e"  border='5px solid'>
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
            <PricingTabContentDiv margin='45px 0 50px 0'>
              <BannerHeader
                fontSize="17px"
                fontWeight="400"
                color='black'
                marginbottom="0"
               >
                0.5 KH/s
              </BannerHeader>
              <FreeSetupDiv>FREE SETUP</FreeSetupDiv>

              <BannerHeader
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                Maintenance Fees per GH/s/day
              </BannerHeader>
              <BannerHeader
                color="black"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                $ 0.299
              </BannerHeader>
              <BannerHeader
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                Contract Duration
              </BannerHeader>
              <BannerHeader
                color="black"
                fontSize="17px"
                fontWeight="400"
                marginbottom="0"
               >
                24 Months
              </BannerHeader>
            </PricingTabContentDiv>
            <div>
              <PrimaryButton
                bgColor="#fb395e"
                fontSize="15px"
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
