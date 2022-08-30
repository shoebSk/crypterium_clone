import styled from "styled-components";

export const FlexBox = styled.div<any>`
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  flex-grow: ${(props) => (props.grow ? props.grow : "")};

  width: ${(props) => (props.width ? props.width : null)};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "")};
  height: ${(props) => (props.height ? props.height : null)};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  flex-wrap: ${(Props) => (Props.flexWrap ? Props.flexWrap : null)};
  overflow-x: ${(props) => (props.overflowX ? props.overflowX : null)};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : null)};
  border-top: ${(props) => (props.borderTop ? props.borderTop : null)};
  position: ${(props) => (props.position ? props.position : null)};
  gap: ${(props) => (props.gap ? props.gap : null)};
`;
