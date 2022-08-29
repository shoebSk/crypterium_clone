import styled from "styled-components";
import CALCULATOR_BG from "../../assets/images/calculator_bg.jpg";

export const CalculatorBGWrap = styled.div`
  background-image: url(${CALCULATOR_BG});
  width: 100%;
  height: 120vh;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  margin-bottom: 10rem;
`;

export const CalculatorSectionWrapper = styled.div`
  /* max-width: 1200px;
  margin: 0 auto; */

  width: 100%;
  position: absolute;
`;

export const CalculatorContainer = styled.div`
  padding-top: 7rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CalculatorHeaderContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  text-align: center;
`;

export const CalculatorSelect = styled.select<any>`
  background-color: white;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20448%22%20enable-background%3D%22new%200%200%20256%20448%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.arrow%7Bfill%3A%23424242%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22arrow%22%20d%3D%22M255.9%20168c0-4.2-1.6-7.9-4.8-11.2-3.2-3.2-6.9-4.8-11.2-4.8H16c-4.2%200-7.9%201.6-11.2%204.8S0%20163.8%200%20168c0%204.4%201.6%208.2%204.8%2011.4l112%20112c3.1%203.1%206.8%204.6%2011.2%204.6%204.4%200%208.2-1.5%2011.4-4.6l112-112c3-3.2%204.5-7%204.5-11.4z%22%2F%3E%3C%2Fsvg%3E%0A");
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: auto 50%;
  border-radius: 30px;
  border: 1px solid #dee5ef;
  width: 100%;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : null)};
  height: 50px;
  padding: 17px 20px;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  option {
    font-size: 12px;
    font-weight: 400;
  }
`;

export const CalculatorInputDiv = styled.div`
  display: block;
  /* width: 100%; */
  background: #fff;
  border: none;
  /* height: 55px; */
  box-shadow: none;
  line-height: 1.2;
  color: #555;
  appearance: none;

  padding: 17px 20px;
  border-radius: 30px;

  input {
    /* width: 100%; */
    height: 100%;
    outline: 0;
    border: none;
  }
`;

export const CalculatorFOurGrid = styled.div<any>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.first ? "4fr 2fr 2fr 2fr" : "2fr 2fr 2fr 4fr"};
  grid-gap: 20px;
`;

export const StatGridFive = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 2fr 2fr;
  grid-gap: 20px;
  margin-top: 5rem;
`;
