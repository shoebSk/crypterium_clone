import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { FlexBox } from "../../shared/FlexBox/Flexbox";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import { ContactUsWrapper } from "../ContactUs/ContactUsStyle";
import { MiningFarmDiv } from "../MiningFarm/MiningFarmStyle";
import Dot from "../../assets/icons/dot.svg";
import { LogoImage } from "../Header/headerStyles";
import { MiningCard } from "./MiningAdvantageStyle";
import ProtectionLogo from "../../assets/icons/protection.png";

const MiningAdvantage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <ContactUsWrapper>
      <FlexBox margin="0 auto" padding="140px 0" gap="8rem">
        <div className="mining-advantage-section">
          <MiningFarmDiv
            width="27.333%"
            data-aos="fade-up"
            margin="0 0 0 11rem">
            <BannerHeader fontSize="17px" fontWeight="100" marginbottom="0">
              CRYPTERIUM STRONG SIZE
            </BannerHeader>

            <BannerHeader fontSize="40px" fontWeight="600" marginbottom="30px">
              Why choose Crypto Mining Farm?
            </BannerHeader>
            <BannerHeader
              fontSize="17px"
              fontWeight="100"
              marginbottom="1.7rem">
              It is also used in server-side network programming with runtime
              environments such as Node.js, game development and the creation of
              desktop and mobile applications.
            </BannerHeader>
          </MiningFarmDiv>

          <MiningFarmDiv width="58.333%" margin="0 -7rem 0 0">
            <FlexBox>
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                // modules={[Pagination]}
                className="mySwiper">
                <SwiperSlide>
                  <MiningCard bgColor="#694e96">
                    <FlexBox
                      width="265px"
                      direction="column"
                      alignItems="baseline">
                      <LogoImage
                        width="48px"
                        src={ProtectionLogo}
                        alt="ProtectionLogo"
                      />

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
                </SwiperSlide>
                <SwiperSlide>
                  <MiningCard bgColor="#43c1a8">
                    <FlexBox
                      width="265px"
                      direction="column"
                      alignItems="baseline">
                      <LogoImage
                        width="48px"
                        src={ProtectionLogo}
                        alt="ProtectionLogo"
                      />

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
                </SwiperSlide>
                <SwiperSlide>
                  <MiningCard bgColor="#4262c1">
                    <FlexBox
                      width="265px"
                      direction="column"
                      alignItems="baseline">
                      <LogoImage
                        width="48px"
                        src={ProtectionLogo}
                        alt="ProtectionLogo"
                      />

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
                </SwiperSlide>
                <SwiperSlide>
                  <MiningCard bgColor="#694e96">
                    <FlexBox
                      width="265px"
                      direction="column"
                      alignItems="baseline">
                      <LogoImage
                        width="48px"
                        src={ProtectionLogo}
                        alt="ProtectionLogo"
                      />

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
                </SwiperSlide>
                <SwiperSlide>
                  <MiningCard bgColor="#43c1a8">
                    <FlexBox
                      width="265px"
                      direction="column"
                      alignItems="baseline">
                      <LogoImage
                        width="48px"
                        src={ProtectionLogo}
                        alt="ProtectionLogo"
                      />

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
                </SwiperSlide>
                <SwiperSlide>
                  <MiningCard bgColor="#43c1a8">
                    <FlexBox
                      width="265px"
                      direction="column"
                      alignItems="baseline">
                      <LogoImage
                        width="48px"
                        src={ProtectionLogo}
                        alt="ProtectionLogo"
                      />

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
                </SwiperSlide>
                <SwiperSlide>
                  <MiningCard bgColor="#4262c1">
                    <FlexBox
                      width="265px"
                      direction="column"
                      alignItems="baseline">
                      <LogoImage
                        width="48px"
                        src={ProtectionLogo}
                        alt="ProtectionLogo"
                      />

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
                </SwiperSlide>
              </Swiper>
            </FlexBox>
          </MiningFarmDiv>
        </div>
      </FlexBox>
    </ContactUsWrapper>
  );
};

export default MiningAdvantage;

{
  /* {Dummy_Data.map((data, idx) => (
              <FlexBox direction="column" key={idx}>
                <MiningCard bgColor={data.bgColor}>
                  <FlexBox
                    direction="column"
                    maxWidth="350px"
                    alignItems="baseline">
                    <LogoImage
                      width={data.id === 1 ? "26px" : "35px"}
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
            ))} */
}
