import React, { useEffect } from "react";
import MISSION from "../../assets/images/mission.png";
import Aos from "aos";
import "aos/dist/aos.css";
import LOCK from "../../assets/icons/lock-line-icon.svg";
import SENT from "../../assets/icons/sent.svg";
import WALLET from "../../assets/icons/wallet.svg";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import { LogoImage, MissionSectionWrapper } from "../Header/headerStyles";
import { FlexBox } from "../../shared/FlexBox/Flexbox";
import { MissionLogo } from "./MissionSectionStyle";

const MissionSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <MissionSectionWrapper>
      <FlexBox gap="6rem">
        <div>
          <img src={MISSION} alt="MISSION" />
        </div>
        <div data-aos="fade-left">
          <BannerHeader fontSize="17px" fontWeight="100" marginbottom="0">
            OUR MISSION
          </BannerHeader>

          <BannerHeader
            fontSize="40px"
            fontWeight="600"
            marginbottom="30px"
            color="black">
            Start Bitcoin Miningwith Three Simple Steps
          </BannerHeader>
          <BannerHeader fontSize="17px" fontWeight="100" marginbottom="1.7rem">
            JavaScript is also used in environments that aren’t web-based, such
            as PDF documents, site-specific browsers, and desktop widgets.
          </BannerHeader>

          <FlexBox justifyContent="flex-start" margin="15px 0 15px 0">
            <MissionLogo bgColor="#4262c1">
              <LogoImage height="25px" width="25px" src={LOCK} alt="" />
            </MissionLogo>
            <BannerHeader
              margin="0 0 0 2rem"
              fontSize="20px"
              fontWeight="500"
              marginbottom="0">
              Register Account
            </BannerHeader>
          </FlexBox>
          <FlexBox justifyContent="flex-start" margin="15px 0 15px 0">
            <MissionLogo bgColor="#694e96">
              <LogoImage height="25px" width="25px" src={SENT} alt="" />
            </MissionLogo>
            <BannerHeader
              fontSize="20px"
              margin="0 0 0 2rem"
              fontWeight="500"
              marginbottom="0">
              Choose your plan
            </BannerHeader>
          </FlexBox>
          <FlexBox justifyContent="flex-start" margin="15px 0 15px 0">
            <MissionLogo bgColor="#43c1a8">
              <LogoImage height="25px" width="25px" src={WALLET} alt="" />
            </MissionLogo>
            <BannerHeader
              fontSize="20px"
              fontWeight="500"
              margin="0 0 0 2rem"
              marginbottom="0">
              Receive Currency
            </BannerHeader>
          </FlexBox>
        </div>
      </FlexBox>
    </MissionSectionWrapper>
  );
};

export default MissionSection;
