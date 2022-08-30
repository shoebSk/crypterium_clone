import React from "react";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import {
  TestimonialContainer,
  TestimonialSectionWrapper,
} from "./TestimonialSectionStyle";

const TestimonialSection = () => {
  return (
    <TestimonialSectionWrapper>
      <TestimonialContainer>
        <div className="testimonial-icon">“</div>
        <div>
          <BannerHeader
            maxWidth="60px"
            margin="6rem 0 45px 0"
            fontSize="30px"
            fontWeight="400"
            color="#fff">
            Oh no way! Can I arks you a question, this heaps good hokey pokey is
            as stuffed as a snarky misses. Good afterble constanoon. Can't
            handle the jandle, do you happen to have a bucket or a hose bro?,
            piece of piss. Mean while, in the marae, Maui and the Armed
            Offenders Squad were up to no good with a bunch of sweet pavlovas.
            Chur bro, you're not in Guatemala now.
            
          </BannerHeader>
          <BannerHeader
            maxWidth="60px"
            margin="0 auto"
            fontSize="26px"
            fontWeight="400"
            marginbottom="10px"
            color="#fff">
            Joseph Allen
          </BannerHeader>
          <BannerHeader
            maxWidth="60px"
            margin="0 auto"
            fontSize="24px"
            fontWeight="400"
            color="#fff"
            opacity="0.5"
            marginbottom="45px">
            CEO Silver Development
          </BannerHeader>
        </div>
      </TestimonialContainer>
    </TestimonialSectionWrapper>
  );
};

export default TestimonialSection;
