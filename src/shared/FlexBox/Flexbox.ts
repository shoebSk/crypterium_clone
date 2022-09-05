import styled from "styled-components";

export const FlexBox = styled.div<any>`
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  flex-grow: ${(props) => (props.grow ? props.grow : "")};

  width: ${(props) => (props.width ? props.width : null)};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : null)};
  height: ${(props) => (props.height ? props.height : null)};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  flex-wrap: ${(Props) => (Props.flexWrap ? Props.flexWrap : null)};
  overflow: ${(props) => (props.overflow ? props.overflow : null)};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : null)};
  border: ${(props) => (props.border ? props.border : null)};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : null)};
  position: ${(props) => (props.position ? props.position : null)};
  gap: ${(props) => (props.gap ? props.gap : null)};


  transition: 0.3s;

  .mining-plans {
    filter: grayscale(1);
  }

  .mining-plans:hover {
    filter: grayscale(0);
    color: black;
  }

  .mining-advantage-section {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    align-items: center;
  }

  @media (max-width: 850px) {
    .mining-advantage-section {
      flex-wrap: wrap;
      padding: 0 15px;
    }
    .miningAdvantageRes {
      width: 100%;
      margin: 0;
    }
  }

  .mySwiper {
    /* background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; */
    overflow: hidden;
  }
`;
