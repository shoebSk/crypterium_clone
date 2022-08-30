import styled from "styled-components";

export const ContactUsWrapper = styled.div<any>`
  background-color: #292b30;
  color: #fff;
  margin-top: ${(props) => props.marginTop ? props.marginTop : null};
  padding: ${(props) => props.padding ? props.padding : null};
`;
export const ContactUsContainer = styled.div`
  padding: 140px 0;
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;
`;

export const ContactUsContent = styled.div`
  max-width: 50%;
  flex: 0 0 50%;
`;

export const ContactUsFormContainer = styled.div`
  display: flex;

  flex: 0 1 100%;

  flex-direction: row;

  flex-wrap: wrap;
  list-style: none;
  margin-left: -15px;
  margin-right: -15px;
  padding: 0;

  .form-div {
    max-width: 50%;

    flex: 0 0 50%;
  }

  .input-wrap {
    position: relative;
    display: block;
    width: 100%;
    line-height: 1;
    margin-top: 20px;
  }

  input {
    border: none;
    background: transparent;
  }

  input::placeholder{
    font-size: 17px;
  }

  textarea::placeholder{
    font-size: 17px;
  }

  textarea {
    border: none;
    background: transparent;
    height: 8.5rem;

    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
  }

  .textfield .textarea {
    height: 100%;
  }

  .textfield {
    display: block;
    width: 90%;
    margin-bottom: 1.5rem;
    background: #34363b;
    border: none;
    box-shadow: none;
    line-height: 1.2;
    font-size: 23px;
    color: #555;
    appearance: none;
    outline: 0;
    padding: 18px 18px;
    border-radius: 30px;
    cursor: text;
    transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out,
      color 0.3s ease-in-out;
  }

  .textfield:hover {
    background-color: #fff;
    color: #c9c9c9;
  }
`;
