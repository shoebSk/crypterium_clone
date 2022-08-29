import React from "react";
import { PrimaryButton } from "../../shared/Button/Button";
import { FlexBox } from "../../shared/FlexBox/Flexbox";
import {
  BannerHeader,
  BannerTitleText,
  BannerWrapper,
  HeaderButtonDiv,
} from "./BannerStyle";

const BannerInfo = () => {
  return (
    <BannerWrapper>
      <BannerHeader fontSize="4rem">Mining Cryptofarm</BannerHeader>
      <div>
        <div className="m-bottom">
          <BannerTitleText>
            Crypterium is the world’s most popular away to buy and sell bitcoin,
            ethereum, and litecoin
          </BannerTitleText>
          <FlexBox justifyContent="flex-start">
            <HeaderButtonDiv padding="0 15px 0 0">
              <PrimaryButton
                bgColor="#f6003b"
                fontSize="15px"
                width="185px"
                padding="18px 30px 18px 30px">
                Start Mining
              </PrimaryButton>
            </HeaderButtonDiv>
            <HeaderButtonDiv padding="0 15px 0 15px">
              <span></span>
              Video Presentation
            </HeaderButtonDiv>
          </FlexBox>
        </div>
        <FlexBox justifyContent="flex-start">
          <FlexBox display='block'>
            <BannerHeader fontSize="47px" fontWeight="700" marginbottom='0'>
              $20.0M
            </BannerHeader>
            <div>Mined by Crypterium</div>
          </FlexBox>
          <FlexBox display='block' margin='0 0 0 5rem'>
            <BannerHeader fontSize="47px" fontWeight="700" marginbottom='0'>
              25.000
            </BannerHeader>
            <div>Used people</div>
          </FlexBox>
        </FlexBox>
      </div>
    </BannerWrapper>
  );
};

export default BannerInfo;
