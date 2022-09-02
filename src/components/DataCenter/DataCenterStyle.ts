import styled from "styled-components";

export const DataCenterImageWrpper = styled.div`
  display: grid;
  grid-template-columns: 6 1fr;
  grid-auto-rows: minmax(300px, auto);
  gap: 0.7rem;

  cursor: pointer;

  figure {
    background: #1abc9c;
    margin: 0;
    height: 100%;
    position: relative;
  }

  figure img {
    opacity: 1;
    transition: 0.3s ease-in-out;
  }

  figure:hover img {
    opacity: 0.5;
  }

  .first {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }

  .second {
    grid-column: 3 / 7;
    grid-row: 1 / 3;
  }
  .third {
    grid-column: 1 / 3;
    grid-row: 3 / 3;
  }

  .fourth {
    grid-column: 3 / 5;
    grid-row: 3 / 3;
  }
  .fifth {
    grid-column: 5 / 7;
    grid-row: 3 / 3;
  }

  @media (max-width: 850px) {
    grid-auto-rows: minmax(180px, auto);
    .first {
      grid-column: 1 / 4;
      grid-row: 1 / 3;
    }
    .second {
      grid-column: 4 / 7;
      grid-row: 1 / 3;
    }
    .third {
      grid-column: 1 / 4;
      grid-row: 3 / 3;
    }

    .fourth {
      grid-column: 4 / 7;
      grid-row: 3 / 3;
    }
    .fifth {
      grid-column: 1 / 4;
      grid-row: 4 / 5;
    }
  }
`;

export const DataImagesDiv = styled.div`
  position: relative;
  background-color: #fff;
  overflow: hidden;
  transition: 0.3s;
  figure span {
    display: none;
  }
  &:hover {
    span {
      display: block;
      position: absolute;
      color: #fff;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const DataCenterRes = styled.div`
  @media (max-width: 850px) {
    .data-center-res {
      flex-wrap: wrap;
      padding: 65px 15px 0 15px;
    }
  }
  .data-center-div-res {
    width: 100%;
  }
`;
