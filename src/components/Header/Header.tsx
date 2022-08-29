import SiteLogo from "../../assets/images/site_logo.png";
import flag from "../../assets/icons/1.png";
import { FlexBox } from "../../shared/FlexBox/Flexbox";
import {  HeaderWrap, LogoImage, NavItemSpan, NavLink } from "./headerStyles";
import { PrimaryButton, SecondaryButton } from "../../shared/Button/Button";

const Header = () => {
  return (
    <HeaderWrap>
      <FlexBox display='flex' justifyContent='space-between' padding='40px 70px 0 70px'>
        <div>
          <NavLink href="#">
            <LogoImage height='42px' src={SiteLogo} alt="SiteLogo" />
          </NavLink>
        </div>
        <FlexBox display='flex' gap='40px'>
          <NavLink href="#">
            <NavItemSpan className='arrow-down'>Home</NavItemSpan>
          </NavLink>
          <NavLink href="#">
            <NavItemSpan className='arrow-down'>Pages</NavItemSpan>
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
        <FlexBox display='flex' gap='20px'>
          <PrimaryButton>Login</PrimaryButton>
          <SecondaryButton>Sign up</SecondaryButton>
          <NavLink href="">
            <LogoImage width='27px' src={flag} alt="flag" />
          </NavLink>
        </FlexBox>
      </FlexBox>
    </HeaderWrap>
  );
};

export default Header;
