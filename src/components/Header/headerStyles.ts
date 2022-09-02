import styled from "styled-components";
import BannerImage from "../../assets/images/bg.png";

export const MissionSectionWrapper = styled.div`
  padding: 140px 0;

  @media (max-width: 850px) {
    .missionSectionREsponsive {
      flex-wrap: wrap;
      gap: 3rem;
      padding: 15px;
    }
  }
`;

export const BannerWrap = styled.div`
  background-image: url(${BannerImage});
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const HeaderWrap = styled.header`
  width: 100%;
  position: absolute;
`;

export const LogoImage = styled.img<any>`
  width: ${(props) => (props.width ? props.width : null)};
  height: ${(props) => (props.height ? props.height : null)};
  object-fit: ${(props) => (props.objFit ? props.objFit : null)};
  transition: 0.3s;

  /* filter: ${(props) => (props.filter ? props.filter : null)}; */

  &:hover {
    /* fill: red; */
    cursor: pointer;
    /* filter: grayscale(0); */
  }
`;
// 990 px

export const ResponsiveHeaderContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.5s;

  .hamburger {
    display: none;
  }

  @media (max-width: 992px) {
    .hamburger {
      display: block;
    }
    .active .bar:nth-child(2) {
      opacity: 0;
    }
    .active .bar:nth-child(1) {
      -webkit-transform: translateY(8px) rotate(-315deg);
      transform: translateY(8px) rotate(-315deg);
      width: 300%;
    }
    .active .bar:nth-child(3) {
      -webkit-transform: translateY(-10px) rotate(-45deg);
      transform: translateY(-10px) rotate(-45deg);
      width: 300%;
    }
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  /* position: relative; */

  .home-nav {
    padding: 10px 0px;
  }
  .page-nav {
    padding: 10px 0px;
  }

  .dropdown:hover {
    cursor: pointer;
  }

  &:hover .dropdown_menu li {
    display: block;
  }
  .dropdown_menu {
    position: absolute;
    top: 75%;
    left: 29%;

    z-index: 1;
  }
  .pages {
    position: absolute;
    top: 75%;
    left: 34.6%;
    z-index: 1;
  }
  .dropdown_menu li {
    display: none;
    color: #fff;
    background-color: #34495e;
    padding: 17px 40px;
    font-size: 16px;
    opacity: 0;
  }

  &:hover .dropdown_menu--animated {
    display: block;
  }
  .dropdown_menu--animated {
    display: none;
  }
  .dropdown_menu--animated li {
    display: block;
    opacity: 1;
  }
  .dropdown_menu-6 {
    animation: growDown 300ms ease-in-out forwards;
    transform-origin: top center;
  }

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

export const FlagContainer = styled.div<any>`
  position: relative;
  display: inline-block;
  vertical-align: top;

  .first-logo {
    display: block;
    position: relative;
    overflow: hidden;
    background-color: #2f4a7e;
    cursor: pointer;
    border-radius: 50%;
    margin: 4px;
  }
`;

export const FlagListWrap = styled.div<any>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 100%;
  background-color: #2f4a7e;
  -webkit-border-radius: 30px;
  border-radius: 30px;

  ul {
    display: ${(props) => (props.show ? props.show : null)};
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    margin: 4px;
  }
`;

export const NavItemSpan = styled.span<any>`
  /* margin-left: ${(props) =>
    props.marginLeft ? props.marginLeft : "40px"}; */
  color: #fff;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }

  /* &:before {
    float: right;
    width: 6px;
    height: 6px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    margin-left: 10px;
    margin-top: 5px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  } */
`;
