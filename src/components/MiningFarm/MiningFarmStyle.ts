import styled from "styled-components";

export const MiningFarmWrapper = styled.div<any>`
  padding: ${(props) => (props.padding ? props.padding : "140px 0")};

  display: flex;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "baseline")};

  width: 100%;
  gap: ${(props) => (props.gap ? props.gap : null)};
`;

export const MiningFarmResponsiveWrapper = styled.div`
  @media (max-width: 850px) {
    .miningFarmMedia {
      display: block;
      padding: 100px 15px;
    }
    .miningFarmDivMedia {
      width: 100%;
      margin-top: 15px;
    }
  }
`;

export const MiningFarmDiv = styled.div<any>`
  width: ${(props) => (props.width ? props.width : null)};
  margin: ${(props) => (props.margin ? props.margin : "0")};

  .m-bottom {
    margin-bottom: 2rem;
  }
`;

export const PlayButton = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 3rem;
  background-color: #f01562;
  border-radius: 50%;
  box-shadow: 0 3px 24px rgb(240 21 98 / 80%);
  transition: 0.3s ease-in-out;
  cursor: pointer;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 30px;
    height: 30px;
  }
`;
