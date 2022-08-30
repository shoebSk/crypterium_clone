import React from "react";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import {
  BlogCardWrap,
  BlogContainer,
  BlogSectionWrapper,
} from "./BlogSectionStyle";
import { FlexBox } from "../../shared/FlexBox/Flexbox";

const BlogSection = () => {
  return (
    <BlogSectionWrapper>
      <BlogContainer>
        <div>
          <BannerHeader
            maxWidth="60px"
            color="black"
            margin="0 auto"
            textAlign="center"
            fontSize="40px"
            s
            fontWeight="600"
            marginbottom="60px">
            Latest News & Blog
          </BannerHeader>
        </div>
        <FlexBox gap="2rem">
          <div>
            <BlogCardWrap>
              <BannerHeader
                color="#43c1a8"
                fontSize="17px"
                fontWeight="600"
                margin="0 0 2rem 0">
                Bitcoin
              </BannerHeader>
              <BannerHeader
                maxWidth="60px"
                margin="0 auto"
                fontSize="30px"
                fontWeight="600"
                marginbottom="45px"
                cursor='pointer'
                hoverColor='#43c1a8'
                color="black">
                The LH-Crypto project has reached $7 000
              </BannerHeader>

              <BannerHeader
                maxWidth="60px"
                margin="0 auto"
                fontSize="18px"
                fontWeight="100"
                marginbottom="45px">
                The meetings will take place in the following cities: 15 January
                – Milan, 16 January – Lugano, 17 January – Zurich, 18 Jan
              </BannerHeader>
              <BannerHeader
                maxWidth="60px"
                //   margin="0 auto"
                fontSize="23px"
                fontWeight="600"
                marginbottom="60px"
                color="black">
                September, 15 2017
              </BannerHeader>
            </BlogCardWrap>
          </div>
          <div>
            <BlogCardWrap>
              <BannerHeader
                color="#43c1a8"
                fontSize="17px"
                fontWeight="600"
                margin="0 0 2rem 0">
                Cryptocurrency
              </BannerHeader>
              <BannerHeader
                maxWidth="60px"
                margin="0 auto"
                fontSize="30px"
                fontWeight="600"
                cursor='pointer'
                hoverColor='#43c1a8'
                marginbottom="45px"
                color="black">
                New trends in UI/UX Design World Integration
              </BannerHeader>

              <BannerHeader
                maxWidth="60px"
                margin="0 auto"
                fontSize="18px"
                fontWeight="100"
                marginbottom="45px">
                Specially for our VIP customers the LH Crypto team
                representatives Alexander Smirnov and Antonis Lapos will conduct
                a number of
              </BannerHeader>
              <BannerHeader
                maxWidth="60px"
                //   margin="0 auto"
                fontSize="23px"
                fontWeight="600"
                marginbottom="60px"
                color="black">
                September, 15 2017
              </BannerHeader>
            </BlogCardWrap>
          </div>
          <div>
            <BlogCardWrap>
              <BannerHeader
                color="#43c1a8"
                fontSize="17px"
                fontWeight="600"
                margin="0 0 2rem 0">
                ICO
              </BannerHeader>
              <BannerHeader
                maxWidth="60px"
                margin="0 auto"
                fontSize="30px"
                fontWeight="600"
                cursor='pointer'
                hoverColor='#43c1a8'
                marginbottom="45px"
                color="black">
                Crypto project has reached NormalCap!
              </BannerHeader>

              <div className="m-bottom"></div>
              <BannerHeader
                maxWidth="60px"
                margin="0 auto"
                fontSize="18px"
                fontWeight="100"
                marginbottom="45px">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for
              </BannerHeader>
              <BannerHeader
                maxWidth="60px"
                //   margin="0 auto"
                fontSize="23px"
                fontWeight="600"
                marginbottom="60px"
                color="black">
                September, 15 2017
              </BannerHeader>
            </BlogCardWrap>
          </div>
          <div>
            <BlogCardWrap>
              <BannerHeader
                color="#43c1a8"
                fontSize="17px"
                fontWeight="600"
                margin="0 0 2rem 0">
                Blockchain
              </BannerHeader>
              <BannerHeader
                maxWidth="60px"
                margin="0 auto"
                fontSize="30px"
                fontWeight="600"
                cursor='pointer'
                hoverColor='#43c1a8'
                marginbottom="45px"
                color="black">
                Start the redemption before the ICO completion
              </BannerHeader>

              <BannerHeader
                maxWidth="60px"
                margin="0 auto"
                fontSize="18px"
                fontWeight="100"
                marginbottom="60px">
                Lh-Crypto project buys 10% of the total amount of LHC tokens
                sold at a double rate. Thus, even now, project investors can
                receive an
              </BannerHeader>
              <BannerHeader
                maxWidth="60px"
                //   margin="0 auto"
                fontSize="23px"
                fontWeight="600"
                marginbottom="60px"
                color="black">
                September, 15 2017
              </BannerHeader>
            </BlogCardWrap>
          </div>
          {/* <div></div>
        <div></div>
        <div></div> */}
        </FlexBox>
      </BlogContainer>
    </BlogSectionWrapper>
  );
};

export default BlogSection;
