import React from "react";
import { PrimaryButton } from "../../shared/Button/Button";
import { FlexBox } from "../../shared/FlexBox/Flexbox";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import { LogoImage } from "../Header/headerStyles";
import {
  EquipmentContentWrapper,
  EquipmentSectionWrapper,
} from "./EquipmentSectionStyle";

const DUMMY_PRODUCT_DATA = [
  {
    imgUrl:
      "https://demo.artureanec.com/html/crypterium/img/equipment_img/1.jpg",
    name: "TI-miner (High) GPU 4 Radeon RX 570",
    price: "$ 3 500",
    powerOne: "ETH – 98 MH/s",
    powerTwo: "ZEC – 1090 Sol/s",
  },
  {
    imgUrl:
      "https://demo.artureanec.com/html/crypterium/img/equipment_img/2.jpg",
    name: "TI-miner (High) GPU 4 Radeon RX 570",
    price: "$ 2 300",
    powerOne: "ETH – 98 MH/s",
    powerTwo: "ZEC – 1090 Sol/s",
  },
  {
    imgUrl:
      "https://demo.artureanec.com/html/crypterium/img/equipment_img/3.jpg",
    name: "TI-miner (High) GPU 4 Radeon RX 570",
    price: "$ 4 750",
    powerOne: "ETH – 98 MH/s",
    powerTwo: "ZEC – 1090 Sol/s",
  },
  {
    imgUrl:
      "https://demo.artureanec.com/html/crypterium/img/equipment_img/4.jpg",
    name: "TI-miner (High) GPU 4 Radeon RX 570",
    price: "$ 1 200",
    powerOne: "ETH – 98 MH/s",
    powerTwo: "ZEC – 1090 Sol/s",
  },
];

const EquipmentSection = () => {
  return (
    <div>
      <div>
        {" "}
        <BannerHeader
          fontSize="17px"
          fontWeight="100"
          marginbottom="2rem"
          textAlign="center">
          WE SALE PRODUCTS
        </BannerHeader>
        <BannerHeader
          maxWidth="60px"
          margin="0 auto"
          textAlign="center"
          fontSize="40px"
          fontWeight="600"
          marginbottom="60px"
          color="black">
          Our Equipment
        </BannerHeader>
      </div>
      <div>
        <EquipmentSectionWrapper>
          {DUMMY_PRODUCT_DATA.map((data) => (
            // <div>{data.name}</div>
            <div>
              <FlexBox border='3px solid #f8f8f8' borderRadius='5px 5px 0 0'>
                <LogoImage
                  width="180px"
                  height="185px"
                  objFit="contain"
                  src={data.imgUrl}
                  alt=""
                />
              </FlexBox>
              <EquipmentContentWrapper>
                <BannerHeader
                  color="black"
                  fontSize="20px"
                  fontWeight="500"
                  marginbottom="2rem"
                  >
                  {data.name}
                </BannerHeader>

                <BannerHeader
                  color="black"
                  fontSize="20px"
                  fontWeight="500"
                  marginbottom="2rem"
                  >
                  Power :
                </BannerHeader>

                <BannerHeader
                  fontSize="17px"
                  fontWeight="100"
                  >
                  {data.powerOne}
                </BannerHeader>
                <BannerHeader
                  fontSize="17px"
                  fontWeight="500"
                  marginbottom="1rem"
                  >
                  {data.powerTwo}
                </BannerHeader>
                <BannerHeader
                  color="#43c1a8"
                  fontSize="20px"
                  fontWeight="600"
                  
                  >
                  {data.price}
                </BannerHeader>
                <FlexBox>
                  <PrimaryButton hoverColor='#33d7b6' padding='20px 59px 20px 59px'>Buy</PrimaryButton>
                </FlexBox>
              </EquipmentContentWrapper>
            </div>
          ))}
        </EquipmentSectionWrapper>
      </div>
    </div>
  );
};

export default EquipmentSection;
