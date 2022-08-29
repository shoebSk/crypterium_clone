import styled from "styled-components";

export const MissionLogo = styled.div<any>`
  height: 45px;
  width: 45px;
  background-color: #4262c1;
  background-color: ${(props) => (props.bgColor ? props.bgColor : null)};
  border-radius: 50%;

  box-shadow: 0 3px 18px rgb(66 98 193 / 80%);

  display: flex;
  justify-content: center;
  align-items: center;
`;
