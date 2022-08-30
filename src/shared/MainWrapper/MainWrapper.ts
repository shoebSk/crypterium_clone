import styled from "styled-components";

export const MainWrapper = styled.div<any>`
  margin: 0 auto;
  max-width: ${(props) => props.maxWidth ? props.maxWidth : '1240px'};
  width: 100%;
  display: ${(props) => props.display ? props.display : null};
`;
