import React, { useState } from "react";
import { FlexBox } from "../../shared/FlexBox/Flexbox";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import { ContactUsWrapper } from "../ContactUs/ContactUsStyle";
import { MiningFarmDiv } from "../MiningFarm/MiningFarmStyle";
import Dot from "../../assets/icons/dot.svg";
import { LogoImage } from "../Header/headerStyles";
import { MiningCard } from "./MiningAdvantageStyle";

const Dummy_Data = [
  {
    logo: "https://demo.artureanec.com/html/crypterium/img/feature_img/1.png",
    title: "Mobile App",
    subtitle:
      " Digital currency stored on our servers is covered by our insurance policy.",
    bgColor: "#694e96",
    id: 1,
  },
  {
    logo: "https://demo.artureanec.com/html/crypterium/img/feature_img/2.png",
    title: "Protection",
    subtitle:
      " Digital currency stored on our servers is covered by our insurance policy.",
    bgColor: "#4262c1",
    id: 2,
  },
  {
    logo: "https://demo.artureanec.com/html/crypterium/img/feature_img/3.png",
    title: "Security",
    subtitle:
      " Digital currency stored on our servers is covered by our insurance policy.",
    bgColor: "#43c1a8",
    id: 3,
  },
  //   {
  //     logo: "https://demo.artureanec.com/html/crypterium/img/feature_img/1.png",
  //     title: "Mobile App",
  //     subtitle:
  //       " Digital currency stored on our servers is covered by our insurance policy.",
  //     bgColor: "#694e96",
  //   },
  //   {
  //     logo: "https://demo.artureanec.com/html/crypterium/img/feature_img/2.png",
  //     title: "Protection",
  //     subtitle:
  //       " Digital currency stored on our servers is covered by our insurance policy.",
  //     bgColor: "#4262c1",
  //   },
  //   {
  //     logo: "https://demo.artureanec.com/html/crypterium/img/feature_img/3.png",
  //     title: "Security",
  //     subtitle:
  //       " Digital currency stored on our servers is covered by our insurance policy.",
  //     bgColor: "#43c1a8",
  //   },
];

const MiningAdvantage = () => {
  const id = Dummy_Data.map((data) => data.id);

  const [currentIndex, setCurrentIndex] = useState<any>(id);

  console.log(currentIndex);

  return (
    <ContactUsWrapper>
      <FlexBox
        maxWidth="1240px"
        margin="0 auto"
        padding="140px 0"
        gap="8rem"
        overflow="hidden">
        <MiningFarmDiv width="33.333%">
          <BannerHeader fontSize="17px" fontWeight="100" marginbottom="0">
            CRYPTERIUM STRONG SIZE
          </BannerHeader>

          <BannerHeader fontSize="40px" fontWeight="600" marginbottom="30px">
            Why choose Crypto Mining Farm?
          </BannerHeader>
          <BannerHeader fontSize="17px" fontWeight="100" marginbottom="1.7rem">
            It is also used in server-side network programming with runtime
            environments such as Node.js, game development and the creation of
            desktop and mobile applications.
          </BannerHeader>
        </MiningFarmDiv>
        <MiningFarmDiv width="58.333%">
          <FlexBox>
            {Dummy_Data.map((data) => (
              <FlexBox direction="column">
                <MiningCard bgColor={data.bgColor}>
                  <FlexBox
                    direction="column"
                    maxWidth="350px"
                    alignItems="baseline">
                    <LogoImage
                      width={data.id === 1 ? '26px' : '35px'}
                      src={data.logo}
                      alt="ProtectionLogo"
                    />
                    <BannerHeader
                      fontSize="34px"
                      fontWeight="500"
                      marginbottom="30px">
                      {data.title}
                    </BannerHeader>
                    <BannerHeader
                      fontSize="17px"
                      fontWeight="100"
                      marginbottom="1.7rem">
                      {data.subtitle}
                    </BannerHeader>
                  </FlexBox>
                </MiningCard>
                <FlexBox>
                  <LogoImage width="15px" src={Dot} />
                </FlexBox>
              </FlexBox>
            ))}

            {/* <MiningCard bgColor="#694e96">
              <FlexBox maxWidth="350px">
                <LogoImage src={ProtectionLogo} alt="ProtectionLogo" />

                <BannerHeader
                  fontSize="34px"
                  fontWeight="500"
                  marginbottom="30px">
                  Protection
                </BannerHeader>

                <BannerHeader
                  fontSize="17px"
                  fontWeight="100"
                  marginbottom="1.7rem">
                  Digital currency stored on our servers is covered by our
                  insurance policy.
                </BannerHeader>
              </FlexBox>
            </MiningCard>
            <MiningCard bgColor="#43c1a8">
              <FlexBox maxWidth="350px">
                <LogoImage src={ProtectionLogo} alt="ProtectionLogo" />

                <BannerHeader
                  fontSize="34px"
                  fontWeight="500"
                  marginbottom="30px">
                  Protection
                </BannerHeader>

                <BannerHeader
                  fontSize="17px"
                  fontWeight="100"
                  marginbottom="1.7rem">
                  Digital currency stored on our servers is covered by our
                  insurance policy.
                </BannerHeader>
              </FlexBox>
            </MiningCard>
            <MiningCard bgColor="#4262c1">
              <FlexBox maxWidth="350px">
                <LogoImage src={ProtectionLogo} alt="ProtectionLogo" />

                <BannerHeader
                  fontSize="34px"
                  fontWeight="500"
                  marginbottom="30px">
                  Protection
                </BannerHeader>

                <BannerHeader
                  fontSize="17px"
                  fontWeight="100"
                  marginbottom="1.7rem">
                  Digital currency stored on our servers is covered by our
                  insurance policy.
                </BannerHeader>
              </FlexBox>
            </MiningCard> */}
          </FlexBox>
        </MiningFarmDiv>
      </FlexBox>
    </ContactUsWrapper>
  );
};

export default MiningAdvantage;
