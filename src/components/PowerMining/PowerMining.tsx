import React from "react";
import { FlexBox } from "../../shared/FlexBox/Flexbox";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import POWER from "../../assets/images/power.png";
import { GradientButton, PrimaryButton } from "../../shared/Button/Button";

const PowerMining = () => {
  return (
    <FlexBox gap="4rem">
      <div>
        <BannerHeader
          fontSize="40px"
          fontWeight="600"
          marginbottom="30px"
          color="black">
          Power & Modern Mining Equipment
        </BannerHeader>
        <BannerHeader fontSize="17px" fontWeight="100" marginbottom="2rem">
          JavaScript is a prototype-based scripting language with dynamic typing
          and first-class functions. This mix of features makes it a
          multi-paradigm language, supporting object-oriented, imperative, and
          functional programming styles.
        </BannerHeader>

        <GradientButton>
          <span>Discover</span>
        </GradientButton>
      </div>
      <div>
        <div>
          <img src={POWER} alt="POWER" />
        </div>
      </div>
    </FlexBox>
  );
};

export default PowerMining;
