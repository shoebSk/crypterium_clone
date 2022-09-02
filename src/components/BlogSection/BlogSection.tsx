import React from "react";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
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
            fontWeight="600"
            marginbottom="60px">
            Latest News & Blog
          </BannerHeader>
        </div>
        <FlexBox gap="2rem" alignItems="baseline">
          <div className="mySwiper">
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}>
              <SwiperSlide>
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
                      fontSize="24px"
                      fontWeight="600"
                      marginbottom="45px"
                      cursor="pointer"
                      hoverColor="#43c1a8"
                      color="black">
                      The LH-Crypto project has reached $7 000
                    </BannerHeader>

                    <BannerHeader
                      maxWidth="60px"
                      margin="0 auto"
                      fontSize="16px"
                      letterSpacing="1px"
                      lineHeight="1.6"
                      fontWeight="100"
                      marginbottom="30px">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for
                    </BannerHeader>
                    <BannerHeader
                      maxWidth="60px"
                      margin="0"
                      fontSize="18px"
                      fontWeight="600"
                      color="black">
                      September, 15 2017
                    </BannerHeader>
                  </BlogCardWrap>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                      fontSize="24px"
                      fontWeight="600"
                      cursor="pointer"
                      hoverColor="#43c1a8"
                      marginbottom="45px"
                      color="black">
                      New trends in UI/UX Design World Integration
                    </BannerHeader>

                    <BannerHeader
                      maxWidth="60px"
                      margin="0 auto"
                      fontSize="16px"
                      letterSpacing="1px"
                      lineHeight="1.6"
                      fontWeight="100"
                      marginbottom="30px">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      fort a number of
                    </BannerHeader>
                    <BannerHeader
                      maxWidth="60px"
                      margin="0"
                      fontSize="18px"
                      fontWeight="600"
                      color="black">
                      September, 15 2017
                    </BannerHeader>
                  </BlogCardWrap>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                      fontSize="24px"
                      fontWeight="600"
                      cursor="pointer"
                      hoverColor="#43c1a8"
                      marginbottom="45px"
                      color="black">
                      The LH-Crypto project has reached $7 000
                    </BannerHeader>

                    <div className="m-bottom"></div>
                    <BannerHeader
                      maxWidth="60px"
                      margin="0 auto"
                      fontSize="16px"
                      letterSpacing="1px"
                      lineHeight="1.6"
                      fontWeight="100"
                      marginbottom="30px">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      fort a number of
                    </BannerHeader>
                    <BannerHeader
                      maxWidth="60px"
                      margin="0"
                      fontSize="18px"
                      fontWeight="600"
                      color="black">
                      September, 15 2017
                    </BannerHeader>
                  </BlogCardWrap>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                      fontSize="24px"
                      fontWeight="600"
                      cursor="pointer"
                      hoverColor="#43c1a8"
                      marginbottom="45px"
                      color="black">
                      The LH-Crypto project has reached $7 000
                    </BannerHeader>

                    <BannerHeader
                      maxWidth="60px"
                      margin="0 auto"
                      fontSize="16px"
                      letterSpacing="1px"
                      lineHeight="1.6"
                      fontWeight="100"
                      marginbottom="30px">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for
                    </BannerHeader>
                    <BannerHeader
                      maxWidth="60px"
                      margin="0"
                      fontSize="18px"
                      fontWeight="600"
                      color="black">
                      September, 15 2017
                    </BannerHeader>
                  </BlogCardWrap>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                      fontSize="24px"
                      fontWeight="600"
                      cursor="pointer"
                      hoverColor="#43c1a8"
                      marginbottom="45px"
                      color="black">
                      The LH-Crypto project has reached $7 000
                    </BannerHeader>

                    <div className="m-bottom"></div>
                    <BannerHeader
                      maxWidth="60px"
                      margin="0 auto"
                      fontSize="16px"
                      letterSpacing="1px"
                      lineHeight="1.6"
                      fontWeight="100"
                      marginbottom="30px">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      fort a number of
                    </BannerHeader>
                    <BannerHeader
                      maxWidth="60px"
                      margin="0"
                      fontSize="18px"
                      fontWeight="600"
                      color="black">
                      September, 15 2017
                    </BannerHeader>
                  </BlogCardWrap>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                      fontSize="24px"
                      fontWeight="600"
                      cursor="pointer"
                      hoverColor="#43c1a8"
                      marginbottom="45px"
                      color="black">
                      The LH-Crypto project has reached $7 000 completion
                    </BannerHeader>

                    <BannerHeader
                      maxWidth="60px"
                      margin="0 auto"
                      fontSize="16px"
                      letterSpacing="1px"
                      lineHeight="1.6"
                      fontWeight="100"
                      marginbottom="30px">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      fort a number of
                    </BannerHeader>
                    <BannerHeader
                      maxWidth="60px"
                      margin="0"
                      fontSize="18px"
                      fontWeight="600"
                      color="black">
                      September, 15 2017
                    </BannerHeader>
                  </BlogCardWrap>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                      fontSize="24px"
                      fontWeight="600"
                      marginbottom="45px"
                      cursor="pointer"
                      hoverColor="#43c1a8"
                      color="black">
                      The LH-Crypto project has reached $7 000
                    </BannerHeader>

                    <BannerHeader
                      maxWidth="60px"
                      margin="0 auto"
                      fontSize="16px"
                      letterSpacing="1px"
                      lineHeight="1.6"
                      fontWeight="100"
                      marginbottom="30px">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for
                    </BannerHeader>
                    <BannerHeader
                      maxWidth="60px"
                      margin="0"
                      fontSize="18px"
                      fontWeight="600"
                      color="black">
                      September, 15 2017
                    </BannerHeader>
                  </BlogCardWrap>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                      fontSize="24px"
                      fontWeight="600"
                      cursor="pointer"
                      hoverColor="#43c1a8"
                      marginbottom="45px"
                      color="black">
                      New trends in UI/UX Design World Integration
                    </BannerHeader>

                    <BannerHeader
                      maxWidth="60px"
                      margin="0 auto"
                      fontSize="16px"
                      letterSpacing="1px"
                      lineHeight="1.6"
                      fontWeight="100"
                      marginbottom="30px">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      fort a number of
                    </BannerHeader>
                    <BannerHeader
                      maxWidth="60px"
                      margin="0"
                      fontSize="18px"
                      fontWeight="600"
                      color="black">
                      September, 15 2017
                    </BannerHeader>
                  </BlogCardWrap>
                </div>
              </SwiperSlide>
            </Swiper>
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
