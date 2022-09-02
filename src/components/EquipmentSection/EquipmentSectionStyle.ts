import styled from "styled-components";

export const EquipmentSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;

  margin-top: 5rem;
  padding: 0 15px;

  @media (max-width: 940px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const EquipmentContentWrapper = styled.div`
  background-color: #f8f8f8;
  padding: 2rem;
`;
