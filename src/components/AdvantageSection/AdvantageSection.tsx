import React, { useEffect } from "react";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import { LogoImage } from "../Header/headerStyles";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  AdvantageCard,
  AdvantageSectionContainer,
  AdvantageSectionWrapper,
  ThreeColumns,
} from "./AdvantageSectionStyle";

const DUMMY_DATA = [
  {
    imgUrl:
      "https://demo.artureanec.com/html/crypterium/img/feature_img/7_1.png",
    title: "Mining farms construction",
    subTitle:
      "Hoki lamprey Japanese eel; loach catfish deep sea bonefish long-finned pike finback cat shark gunnel. Shiner eel cod striped bass",
  },
  {
    imgUrl:
      "https://demo.artureanec.com/html/crypterium/img/feature_img/2_1.png",
    title: "Warranty from 1 to 5 years",
    subTitle:
      "Hoki lamprey Japanese eel; loach catfish deep sea bonefish long-finned pike finback cat shark gunnel. Shiner eel cod striped bass",
  },
  {
    imgUrl:
      "https://demo.artureanec.com/html/crypterium/img/feature_img/3_1.png",
    title: "Secure Storage",
    subTitle:
      "Hoki lamprey Japanese eel; loach catfish deep sea bonefish long-finned pike finback cat shark gunnel. Shiner eel cod striped bass",
  },
  {
    imgUrl:
      "https://demo.artureanec.com/html/crypterium/img/feature_img/4_1.png",
    title: "Cryptocurrency Exchange",
    subTitle:
      "Hoki lamprey Japanese eel; loach catfish deep sea bonefish long-finned pike finback cat shark gunnel. Shiner eel cod striped bass",
  },
  {
    imgUrl:
      "https://demo.artureanec.com/html/crypterium/img/feature_img/8_1.png",
    title: "Safety and transparency",
    subTitle:
      "Hoki lamprey Japanese eel; loach catfish deep sea bonefish long-finned pike finback cat shark gunnel. Shiner eel cod striped bass",
  },
  {
    imgUrl:
      "https://demo.artureanec.com/html/crypterium/img/feature_img/6_1.png",
    title: "Multycurrency Wallet",
    subTitle:
      "Hoki lamprey Japanese eel; loach catfish deep sea bonefish long-finned pike finback cat shark gunnel. Shiner eel cod striped bass",
  },
];

const AdvantageSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <AdvantageSectionWrapper>
      <AdvantageSectionContainer>
        <div>
          <BannerHeader
            fontSize="17px"
            fontWeight="100"
            marginbottom="2rem"
            textAlign="center">
            MEET THE PRODUCT
          </BannerHeader>

          <BannerHeader
            maxWidth="60px"
            margin="0 auto"
            textAlign="center"
            fontSize="40px"
            fontWeight="600"
            marginbottom="60px"
            color="black">
            Advantages
          </BannerHeader>
        </div>
        <div>
          <ThreeColumns
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0">
            {DUMMY_DATA.map((data, idx) => (
              //   <div key={idx}>{data.title}</div>
              <AdvantageCard key={idx}>
                {/* object-fit: contain */}
                <LogoImage
                  objFit="contain"
                  width="55px"
                  height="55px"
                  src={data.imgUrl}
                  alt=""
                />

                <BannerHeader
                  maxWidth="60px"
                  margin="20px 0"
                  textAlign="center"
                  fontSize="30px"
                  fontWeight="600"
                  color="black">
                  {data.title}
                </BannerHeader>
                <BannerHeader
                  lineHeight="1.7"
                  fontSize="17px"
                  fontWeight="100"
                  marginbottom="2rem"
                  textAlign="center">
                  {data.subTitle}
                </BannerHeader>
              </AdvantageCard>
            ))}
          </ThreeColumns>
        </div>
      </AdvantageSectionContainer>
    </AdvantageSectionWrapper>
  );
};

export default AdvantageSection;
