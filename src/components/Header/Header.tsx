import SiteLogo from "../../assets/images/site_logo.png";
import flagOne from "../../assets/icons/1.png";
import flagTwo from "../../assets/icons/2.png";
import flagThree from "../../assets/icons/3.png";
import flagFour from "../../assets/icons/4.png";
import { FlexBox } from "../../shared/FlexBox/Flexbox";
import {
  FlagContainer,
  FlagListWrap,
  HeaderWrap,
  LogoImage,
  NavItemSpan,
  NavLink,
} from "./headerStyles";
import { PrimaryButton, SecondaryButton } from "../../shared/Button/Button";
import { useState } from "react";

const Header = () => {
  const [showFlag, setShowFlag] = useState(false);
  console.log(showFlag);
  

  return (
    <HeaderWrap>
      <FlexBox
        display="flex"
        justifyContent="space-between"
        padding="30px 70px 0 70px">
        <div>
          <NavLink href="#">
            <LogoImage height="42px" src={SiteLogo} alt="SiteLogo" />
          </NavLink>
        </div>
        <FlexBox display="flex" gap="40px">
          <NavLink href="#">
            <NavItemSpan className="arrow-down">Home</NavItemSpan>
          </NavLink>
          <NavLink href="#">
            <NavItemSpan className="arrow-down">Pages</NavItemSpan>
          </NavLink>
          <NavLink href="#">
            <NavItemSpan>White Papers</NavItemSpan>
          </NavLink>
          <NavLink href="#">
            <NavItemSpan>FAQ's</NavItemSpan>
          </NavLink>
          <NavLink href="#">
            <NavItemSpan>Support</NavItemSpan>
          </NavLink>
        </FlexBox>
        <FlexBox display="flex" gap="20px">
          <PrimaryButton hoverColor="#26de81">Login</PrimaryButton>
          <SecondaryButton>Sign up</SecondaryButton>
          <FlagContainer onClick={() => setShowFlag(!showFlag)}>
            <FlagListWrap show={showFlag ? "block" : "none"}>
              <ul>
                <li>
                  <LogoImage width="24px" src={flagTwo} alt="flag" />
                </li>
                <li>
                  <LogoImage width="24px" src={flagThree} alt="flag" />
                </li>
                <li>
                  <LogoImage width="24px" src={flagFour} alt="flag" />
                </li>
              </ul>
            </FlagListWrap>
            <LogoImage
              className="first-logo"
              width="24px"
              src={flagOne}
              alt="flag"
            />
          </FlagContainer>
        </FlexBox>
      </FlexBox>
    </HeaderWrap>
  );
};

export default Header;
