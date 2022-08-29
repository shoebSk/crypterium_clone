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
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  color: #fff;
  text-decoration: underline;
  outline: 0;
  border: none;
  transition: color 0.3s ease-in-out;
`;

export const ButtonWrapper = styled.div`
  display: block;
  align-self: end;
`;
