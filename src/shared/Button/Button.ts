import styled from "styled-components";

export const PrimaryButton = styled.button<any>`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#10cb6c")};
  color: ${(props) => (props.color ? props.color : "#fff")};
  min-height: 38px;
  width: ${(props) => (props.width ? props.width : null)};
  padding: ${(props) =>
    props.padding ? props.padding : "10px 30px 10px 30px"};
  border: none;
  box-shadow: none;
  outline: 0;
  cursor: pointer;
  overflow: hidden;
  border-radius: 30px;

  font-size: ${(props) => (props.fontSize ? props.fontSize : null)};
  transition: 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.hoverColor ? props.hoverColor : null};
    color: ${(props) => (props.hoverFontColor ? props.hoverFontColor : null)};
  }
`;

export const SecondaryButton = styled.button<any>`
  background-color: transparent;
  color: #fff;
  text-decoration: underline;
  outline: 0;
  border: none;
  transition: color 0.3s ease-in-out;

  @media (max-width: 1024px) {
    color: #555;
  }
`;

export const ButtonWrapper = styled.div`
  display: block;
  align-self: end;
`;

export const GradientButton = styled.button`
  background: linear-gradient(325deg, #5b467e 0, #3365a7 50%, #47cca6 100%);
  border-radius: 35px;
  box-sizing: border-box;
  color: #00a84f;
  cursor: pointer;
  height: 60px;
  letter-spacing: 1px;
  margin: 0 auto;
  padding: 3px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 195px;
  z-index: 2;
  border: none;

  &:hover {
    color: #fff;
    background: #43c1a8;
  }

  span {
    align-items: center;
    background: #fff;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    height: 100%;
    transition: background 0.5s ease;
    width: 100%;
  }

  &:hover span {
    background: transparent;
  }
`;
