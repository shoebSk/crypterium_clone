import styled from "styled-components";

export const DataCenterImageWrpper = styled.div`
  display: grid;
  grid-template-columns: 6 1fr;
  grid-auto-rows: minmax(300px, auto);
  gap: 0.7rem;

  /* background-color: rgba(   67, 193, 168, 0.66); */
  /* transition: 0.3s ease-in-out; */

  cursor: pointer;

  figure {
    background: #1abc9c;
    margin: 0;
    height: 100%;
  }

  figure img {
    opacity: 1;
    -webkit-transition: 0.3s ease-in-out;
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
`;

export const DataImagesDiv = styled.div`
  position: relative;
  /* width: 100%;
  height: 100%; */
  background-color: #fff;
  overflow: hidden;
`;
