import styled from "styled-components";
import GraphicCard from "../../assets/images/graphic-card.png";

export const PurchaseSectionWrapper = styled.div`
  padding: 140px 0;
  background-color: #eef2f4;
  background-image: url(${GraphicCard});
  background-repeat: no-repeat;
  background-position: left 47vw bottom 65%;
  position: relative;
`;

export const PurchaseSectionContainer = styled.div`
  max-width: 39%;
  margin-left: 10rem;
`;

export const PriceTag = styled.div`
  position: absolute;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #ed2139;
  right: 29%;
  top: 10%;

  span {
    position: absolute;
    top: 38%;
    right: 26%;
    font-size: 2.5rem;
    color: white;
    font-weight: 600;
  }
`;
