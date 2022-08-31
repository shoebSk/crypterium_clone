import styled from "styled-components";
import BannerImage from "../../assets/images/bg.png";

export const MissionSectionWrapper = styled.div`
  padding: 140px 0;
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
  transition: .3s;

  /* filter: ${(props) => props.filter ? props.filter : null}; */

  &:hover {
    /* fill: red; */
    cursor: pointer;
    /* filter: grayscale(0); */
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
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
