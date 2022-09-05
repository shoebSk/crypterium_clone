import SiteLogo from "../../assets/images/site_logo.png";
import ActiveSiteLogo from "../../assets/images/active-site-logo.png";
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
  ResponsiveHeaderContainer,
} from "./headerStyles";
import { PrimaryButton, SecondaryButton } from "../../shared/Button/Button";
import { useEffect, useState } from "react";

const Header = () => {
  const [showFlag, setShowFlag] = useState(false);
  const [active, setActive] = useState(false);

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);

  // const handleScroll = () => {
  //   setScrollPosition(document.body.getBoundingClientRect().top);
  //   setShow(document.body.getBoundingClientRect().top > scrollPosition);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollPosition]);

  return (
    <HeaderWrap
    //  visible={show ? "visible" : "hidden"}
    >
      <FlexBox display="flex" justifyContent="space-between">
        <ResponsiveHeaderContainer showActive={active}>
          <NavLink href="#" showActive={active}>
            <LogoImage
              height="42px"
              src={active ? ActiveSiteLogo : SiteLogo}
              alt="SiteLogo"
            />
          </NavLink>

          <FlexBox
            showActive={active}
            display="flex"
            gap="40px"
            className="mid-nav">
            <NavLink href="#" showActive={active}>
              <NavItemSpan
                // visible={show ? "visible" : "hidden"}
                showActive={active}
                className="arrow-down home-nav">
                Home
              </NavItemSpan>
              <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                <li className="dropdown_item-1">Home Page</li>
                <li className="dropdown_item-2">Home Slider</li>
                <li className="dropdown_item-3">Agency</li>
                <li className="dropdown_item-4">Landing Wallet</li>
                <li className="dropdown_item-5">Item 5</li>
              </ul>
            </NavLink>
            <NavLink href="#">
              <NavItemSpan
                // visible={show ? "visible" : "hidden"}
                showActive={active}
                className="arrow-down page-nav">
                Pages
              </NavItemSpan>
              <ul className="dropdown_menu pages dropdown_menu--animated dropdown_menu-6">
                <li className="dropdown_item-1">About</li>
                <li className="dropdown_item-2">Services</li>
                <li className="dropdown_item-3">Blog Post</li>
                <li className="dropdown_item-4">Blog</li>
                <li className="dropdown_item-5">Pricing Table</li>
                <li className="dropdown_item-5">Contact</li>
              </ul>
            </NavLink>
            <NavLink href="#">
              <NavItemSpan
                // visible={show ? "visible" : "hidden"}
                showActive={active}>
                White Papers
              </NavItemSpan>
            </NavLink>
            <NavLink href="#">
              <NavItemSpan
                // visible={show ? "visible" : "hidden"}
                showActive={active}>
                FAQ's
              </NavItemSpan>
            </NavLink>
            <NavLink href="#">
              <NavItemSpan
                // visible={show ? "visible" : "hidden"}
                showActive={active}>
                Support
              </NavItemSpan>
            </NavLink>
          </FlexBox>
          <FlexBox display="flex" gap="20px" className="end-nav">
            <PrimaryButton hoverColor="#26de81">Login</PrimaryButton>
            <SecondaryButton>Sign up</SecondaryButton>
            <FlagContainer
            //  show={showFlag}
              onClick={() => setShowFlag(!showFlag)}>
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
          <div className="hamburger" onClick={() => setActive(!active)}>
            <div></div>
          </div>
        </ResponsiveHeaderContainer>
      </FlexBox>
    </HeaderWrap>
    // <HeaderWrap>
    //   <a href="" className="logo">
    //     CSS Nav
    //   </a>
    //   <input className="menu-btn" type="checkbox" id="menu-btn" />
    //   <label className="menu-icon" htmlFor="menu-btn">
    //     <span className="navicon"></span>
    //   </label>
    //   <ul className="menu">
    //     <li>
    //       <a href="#">Home</a>
    //     </li>
    //     <li>
    //       <a href="#">Pages</a>
    //     </li>
    //     <li>
    //       <a href="#">White Papers</a>
    //     </li>
    //     <li>
    //       <a href="#">FAQ's</a>
    //     </li>
    //     <li>
    //       <a href="#">Support</a>
    //     </li>
    //   </ul>
    // </HeaderWrap>
  );
};

export default Header;
