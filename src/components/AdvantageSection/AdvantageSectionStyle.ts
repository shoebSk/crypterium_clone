import styled from "styled-components";

export const AdvantageSectionWrapper = styled.div`
  padding: 140px 0;
  border-bottom: 1px solid #e7eaeb;
  margin-bottom: 10rem;
`;

export const AdvantageSectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ThreeColumns = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 640px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1280px) {
    grid-gap: 25px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const AdvantageCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
