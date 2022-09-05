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

export const HeaderWrap = styled.header<any>`
  width: 100%;
  /* position: absolute; */
  visibility: ${(props) => (props.visible ? props.visible : null)};
  /* position: fixed; */

  background-color: ${(props) => (props.visible ? "#fff" : null)};
  z-index: 15;
  /* 
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 3;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
  }

  li a {
    display: block;
    padding: 20px 20px;
    text-decoration: none;
  }



  .logo {
    display: block;
    float: left;
    font-size: 2em;
    padding: 10px 20px;
    text-decoration: none;
  }

 

  .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }



  .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }

  .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .menu-icon .navicon:before,
  .menu-icon .navicon:after {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .menu-icon .navicon:before {
    top: 5px;
  }

  .menu-icon .navicon:after {
    top: -5px;
  }

 

  .menu-btn {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    max-height: 240px;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }



  @media (min-width: 48em) {
    li {
      float: left;
    }
    li a {
      padding: 20px 30px;
    }
    .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .menu-icon {
      display: none;
    }
  } */
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

export const ResponsiveHeaderContainer = styled.div<any>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index: 10;

  transition: all 0.5s;

  .hamburger {
    cursor: pointer;
    display: none;
  }

  .hamburger:before,
  .hamburger:after,
  .hamburger div {
    background: ${(props) => (props.showActive ? "black" : "#fff")};

    content: "";
    display: block;
    height: 3px;
    width: 28px;
    border-radius: 3px;
    margin: 7px 0;
    transition: 0.5s;
  }
  .hamburger:before {
    /* transform: translateY(11px) rotate(135deg); */
    transform: ${(props) =>
      props.showActive ? "translateY(9px) rotate(135deg)" : null};
  }
  .hamburger:after {
    /* transform: translateY(-12px) rotate(-135deg); */
    transform: ${(props) =>
      props.showActive ? "translateY(-12px) rotate(-135deg)" : null};
  }
  .hamburger div {
    /* transform: scale(0); */
    transform: ${(props) => (props.showActive ? "scale(0)" : "scale(1)")};
  }

  @media (max-width: 1024px) {
    flex-direction: ${(props) => (props.showActive ? "column" : "row")};
    background: ${(props) => (props.showActive ? "#fff" : null)};
    height: ${(props) => (props.showActive ? "calc(100vh - 30px)" : null)};
    .hamburger {
      display: block;
      position: ${(props) => (props.showActive ? "absolute" : null)};
      top: 34px;
      right: 30px;
    }

    .mid-nav {
      display: ${(props) => (props.showActive ? "block" : "none")};
    }
    .end-nav {
      display: ${(props) => (props.showActive ? "block" : "none")};
    }
  }
`;

export const NavLink = styled.a<any>`
  text-decoration: none;
  /* position: relative; */
  align-self: ${(props) => (props.showActive ? "baseline" : null)};

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
    /* top: 75%;
    left: 29%; */

    top: ${(props) => (props.showActive ? "41%" : "75%")};
    left: ${(props) => (props.showActive ? "39.5%" : "29%")};

    z-index: 1;
  }
  .pages {
    position: absolute;

    top: ${(props) => (props.showActive ? "47%" : "75%")};
    left: ${(props) => (props.showActive ? "39.6%" : "34.6%")};

    z-index: 1;
  }
  .dropdown_menu li {
    display: none;
    color: ${(props) => (props.showActive ? "#555" : "#fff")};

    /* background-color: #34495e; */
    background-color: ${(props) => (props.showActive ? "#f5efef" : "#34495e")};
    /* padding: 17px 40px; */
    padding: ${(props) => (props.showActive ? "17px 20px" : "17px 40px")};
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

  /* animation: move 6s; */

  /* animation: ${(props) => props.show ? 'move 2s' : null};

  @keyframes move {
    0% {
      top: 0px;
    }
    33% {
      top: 50px;
    }
    33% {
      top: 100px;
    }
    34% {
      top: 150px;
    }
  } */
`;

export const FlagListWrap = styled.div<any>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 100%;
  background-color: #2f4a7e;

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
  color: ${(props) => (props.visible ? "#555" : "#fff")};

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: ${(props) => (props.showActive ? "20px" : "2px")};
    left: 50%;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }

  @media (max-width: 1024px) {
    color: #555;
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
