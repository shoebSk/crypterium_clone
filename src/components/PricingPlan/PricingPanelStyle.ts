import styled from "styled-components";


export const PricingPanelWrapper = styled.div`
padding-bottom: 140px;
`

export const PricingPanelDiv = styled.section<any>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : null)};
  margin: ${(props) => (props.margin ? props.margin : null)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : null)};
`;

export const PricingTab = styled.div<any>`
  border: ${(props) => (props.border ? props.border : null)};
  border-color: ${(props) => (props.borderColor ? props.borderColor : null)};
  border-radius: 10px;
  text-align: center;
  position: relative;
  padding: ${(props) => (props.padding ? props.padding : "70px 25px 40px")};

  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : null)};
  background-color: ${(props) => (props.bgColor ? props.bgColor : null)};

  overflow: hidden;


  .cross-text{
    position: absolute;
    background-color: #fff;
    transform: rotate(45deg) translateY(-110px);
    padding: 129px 0 10px 0;
    top: 0;
    right: 0px;
    width: 160px;
    font-size: 11px;
    font-weight: 700;
  }
`;

export const PricingTabContentDiv = styled.div<any>`
  margin: ${(props) => (props.margin ? props.margin : null)};
`;

export const FreeSetupDiv = styled.div<any>`
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 9px 10px;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "rgba(200, 200, 200, 0.28)"};
  font-size: 11px;
  text-transform: uppercase;
  color: #737373;
`;

export const PricingTabContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  justify-content: center;
  flex-wrap: wrap;
`;
