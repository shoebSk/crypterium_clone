import React, { useState } from "react";
import { PrimaryButton } from "../../shared/Button/Button";
import { FlexBox } from "../../shared/FlexBox/Flexbox";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import {
  AnswersList,
  FAQContainer,
  FAQList,
  QuestionSectionWrapper,
} from "./QuestionSectionStyle";

const QuestionSection = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <QuestionSectionWrapper>
      <div>
        <BannerHeader
          fontSize="17px"
          fontWeight="100"
          marginbottom="2rem"
          textAlign="center">
          FAQ
        </BannerHeader>
        <BannerHeader
          maxWidth="60px"
          color="black"
          margin="0 auto"
          textAlign="center"
          fontSize="40px"
          fontWeight="600"
          marginbottom="60px">
          Have any questions?
        </BannerHeader>
      </div>
      <div>
        <FAQList>
          <AnswersList>
            <input
              type="checkbox"
              id="question1"
              name="q"
              className="questions"
            />
            <FlexBox justifyContent="space-between" position="relative">
              <label htmlFor="question1" className="question">
                Can American citizens take part in the crowdsale?
              </label>
              <div className="plus">+</div>
            </FlexBox>

            <div className="answers">
              <div className="m-bottom">
                Dr guarantees trouble-free operation of your equipment, control
                and monitoring for optimal external temperature, humidity, dust
                protection.
              </div>
              <div className="m-bottom">
                Data center is protected from electric voltage jumps and broken
                internet connections. Backuping of power supply systems provides
                hours-long stable functioning of equipment in case if some
                force-majeure circumstances occurs (instability of electric
                power network, industrial network disconnection etc.). a duty
                engineer proceeds to remove defects/failures at once after
                relevant information is received.
              </div>
            </div>
          </AnswersList>
          <AnswersList>
            <input
              type="checkbox"
              id="question2"
              name="q"
              className="questions"
            />
            <FlexBox justifyContent="space-between" position="relative">
              <label htmlFor="question2" className="question">
                Can American citizens take part in the crowdsale?
              </label>
              <div className="plus">+</div>
            </FlexBox>

            <div className="answers">
              JavaScript is also used in environments that aren’t web-based,
              such as PDF documents, site-specific browsers, and desktop
              widgets. Newer and faster JavaScript virtual machines (VMs) and
              platforms built upon them have also increased the popularity of
              JavaScript for server-side web applications. On the client side,
              JavaScript has been traditionally implemented as an interpreted
              language, but more recent browsers per
            </div>
          </AnswersList>
          <AnswersList>
            <input
              type="checkbox"
              id="question3"
              name="q"
              className="questions"
            />
            <FlexBox justifyContent="space-between" position="relative">
              <label htmlFor="question3" className="question">
                Can American citizens take part in the crowdsale?
              </label>
              <div className="plus">+</div>
            </FlexBox>

            <div className="answers">
              JavaScript is also used in environments that aren’t web-based,
              such as PDF documents, site-specific browsers, and desktop
              widgets. Newer and faster JavaScript virtual machines (VMs) and
              platforms built upon them have also increased the popularity of
              JavaScript for server-side web applications. On the client side,
              JavaScript has been traditionally implemented as an interpreted
              language, but more recent browsers per
            </div>
          </AnswersList>
        </FAQList>
        <FlexBox marginTop='22px'>
          <PrimaryButton padding="20px 59px 20px 59px">Show More</PrimaryButton>
        </FlexBox>
      </div>
    </QuestionSectionWrapper>
  );
};

export default QuestionSection;
