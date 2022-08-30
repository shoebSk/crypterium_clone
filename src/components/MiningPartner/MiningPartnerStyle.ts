import styled from "styled-components";

export const ThreeColumnGridImage = styled.div`
  width: 65%;
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 640px) {
    grid-gap: 50px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-gap: 50px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1280px) {
    grid-gap: 50px;
    grid-template-columns: repeat(3, 1fr);
  }
`;
