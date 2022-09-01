import styled from "styled-components";

export const MiningCard = styled.div<any>`
  width: 100%;
  padding: 80px 30px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : null)};
  color: #fff;
`;
