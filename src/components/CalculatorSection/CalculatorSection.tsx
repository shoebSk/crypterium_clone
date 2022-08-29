import React from "react";
import { ButtonWrapper, PrimaryButton } from "../../shared/Button/Button";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import {
  CalculatorContainer,
  CalculatorFOurGrid,
  CalculatorHeaderContent,
  CalculatorInputDiv,
  CalculatorSectionWrapper,
  CalculatorSelect,
  StatGridFive,
} from "./CalculatorSectionStyle";

const CalculatorSection = () => {
  return (
    <CalculatorSectionWrapper>
      <CalculatorContainer>
        <CalculatorHeaderContent>
          <BannerHeader
            color="#fff"
            fontSize="17px"
            fontWeight="100"
            marginbottom="2rem"
            textAlign="center">
            CALCULATOR
          </BannerHeader>

          <BannerHeader
            maxWidth="60px"
            margin="0 auto"
            textAlign="center"
            fontSize="40px"
            fontWeight="600"
            marginbottom="60px"
            color="#fff">
            Calculate the Value of your Mining Farm Right Now
          </BannerHeader>
        </CalculatorHeaderContent>
        <div>
          <CalculatorFOurGrid first="first">
            <div>
              <BannerHeader
                color="#fff"
                lineHeight="1.7"
                fontSize="17px"
                fontWeight="100"
                marginbottom="1rem">
                Choose the model of the video card
              </BannerHeader>
              <CalculatorSelect marginBottom="1.5rem">
                <option value="sefwef">Nvidia Gderoce 1080 Ti1</option>
                <option value="wefwef">Nvidia Gderoce 1080 Ti2</option>
                <option value="wefwef">Nvidia Gderoce 1080 Ti3</option>
              </CalculatorSelect>
            </div>
            <div>
              <BannerHeader
                color="#fff"
                lineHeight="1.7"
                fontSize="17px"
                fontWeight="100"
                marginbottom="1rem">
                Hash rate, Gs/s
              </BannerHeader>
              <CalculatorInputDiv>
                <input type="text" id="hash" placeholder="14000.0" />
              </CalculatorInputDiv>
            </div>
            <div>
              <BannerHeader
                color="#fff"
                lineHeight="1.7"
                fontSize="17px"
                fontWeight="100"
                marginbottom="1rem">
                Power, W
              </BannerHeader>
              <CalculatorInputDiv>
                <input type="text" id="power" placeholder="1370.0" />
              </CalculatorInputDiv>
            </div>
            <div>
              <BannerHeader
                color="#fff"
                lineHeight="1.7"
                fontSize="17px"
                fontWeight="100"
                marginbottom="1rem">
                Cost, $/kWh
              </BannerHeader>
              <CalculatorInputDiv>
                <input type="text" id="cost" placeholder="1.0" />
              </CalculatorInputDiv>
            </div>
          </CalculatorFOurGrid>
          <div>
            <CalculatorFOurGrid>
              <div>
                <BannerHeader
                  color="#fff"
                  lineHeight="1.7"
                  fontSize="17px"
                  fontWeight="100">
                  Number of video cards
                </BannerHeader>
                <CalculatorSelect>
                  <option value="sefwef">8 Video Cards</option>
                  <option value="wefwef">8 Video Cards</option>
                  <option value="wefwef">8 Video Cards</option>
                </CalculatorSelect>
              </div>
              <div>
                <BannerHeader
                  color="#fff"
                  lineHeight="1.7"
                  fontSize="17px"
                  fontWeight="100">
                  Number of farms
                </BannerHeader>
                <CalculatorSelect>
                  <option value="sefwef">1</option>
                  <option value="wefwef">2</option>
                  <option value="wefwef">3</option>
                </CalculatorSelect>
              </div>
              <div>
                <BannerHeader
                  color="#fff"
                  lineHeight="1.7"
                  fontSize="17px"
                  fontWeight="100">
                  Hardware cost, $
                </BannerHeader>
                <CalculatorInputDiv>
                  <input type="text" id="power" placeholder="1370.0" />
                </CalculatorInputDiv>
              </div>
              <ButtonWrapper>
                <PrimaryButton width="100%" padding="20px 20px">
                  Login
                </PrimaryButton>
              </ButtonWrapper>
            </CalculatorFOurGrid>
          </div>
          <StatGridFive>
            <div>
              <BannerHeader
                color="#fff"
                lineHeight="1.7"
                fontSize="24px"
                fontWeight="500">
                Result of calculation:
              </BannerHeader>
              <BannerHeader
                color="#fff"
                lineHeight="1.7"
                fontSize="17px"
                fontWeight="100">
                All calculations are based on data from whattomine.com
              </BannerHeader>
            </div>
            <div>
              <BannerHeader
                color="#fff"
                lineHeight="1.7"
                fontSize="17px"
                fontWeight="100">
                Monthly Income
              </BannerHeader>
              <BannerHeader
                maxWidth="60px"
                margin="0 auto"
                textAlign="center"
                fontSize="40px"
                fontWeight="600"
                marginbottom="60px"
                color="#fff">
                $ 4 316
              </BannerHeader>
            </div>
            <div>
              <BannerHeader
                color="#fff"
                lineHeight="1.7"
                fontSize="17px"
                fontWeight="100">
                Weekly Income
              </BannerHeader>
              <BannerHeader
                maxWidth="60px"
                margin="0 auto"
                textAlign="center"
                fontSize="40px"
                fontWeight="600"
                marginbottom="60px"
                color="#fff">
                $ 1 007
              </BannerHeader>
            </div>
            <div>
              <BannerHeader
                color="#fff"
                lineHeight="1.7"
                fontSize="17px"
                fontWeight="100">
                Performance
              </BannerHeader>
              <BannerHeader
                maxWidth="60px"
                margin="0 auto"
                textAlign="center"
                fontSize="40px"
                fontWeight="600"
                marginbottom="60px"
                color="#fff">
                744 MH/s
              </BannerHeader>
            </div>
            <div>
              <BannerHeader
                color="#fff"
                lineHeight="1.7"
                fontSize="17px"
                fontWeight="100">
                Energy consumption
              </BannerHeader>
              <BannerHeader
                maxWidth="60px"
                margin="0 auto"
                textAlign="center"
                fontSize="40px"
                fontWeight="600"
                marginbottom="60px"
                color="#fff">
                4 320 W
              </BannerHeader>
            </div>
          </StatGridFive>
        </div>
      </CalculatorContainer>
    </CalculatorSectionWrapper>
  );
};

export default CalculatorSection;
