import styled from "styled-components";

export const QuestionSectionWrapper = styled.div`
  padding: 140px 0;
`;

export const FAQContainer = styled.div``;

// export const FAQList = styled.ul`
//   margin: 0 auto;
//   border-top: 1px solid #d9e5e8;
//   list-style: none;

//   a {
//     width: 100%;
//     display: block;
//     cursor: pointer;
//     font-weight: 600;
//     line-height: 3;
//     font-size: 14px;
//     font-size: 0.875rem;
//     text-indent: 15px;
//     user-select: none;
//   }
//   a:after {
//     width: 8px;
//     height: 8px;
//     border-right: 1px solid #4a6e78;
//     border-bottom: 1px solid #4a6e78;
//     position: absolute;
//     right: 10px;
//     content: " ";
//     top: 17px;
//     transform: rotate(-45deg);
//     -webkit-transition: all 0.2s ease-in-out;
//     -moz-transition: all 0.2s ease-in-out;
//     transition: all 0.2s ease-in-out;
//   }
//   p {
//     font-size: 13px;
//     font-size: 0.8125rem;
//     line-height: 2;
//     padding: 10px;
//   }

//   a.active:after {
//     transform: rotate(45deg);
//     -webkit-transition: all 0.2s ease-in-out;
//     -moz-transition: all 0.2s ease-in-out;
//     transition: all 0.2s ease-in-out;
//   }
// `;

// export const AnswersList = styled.li<any>`
//   border-bottom: 1px solid #d9e5e8;
//   position: relative;

//   p {
//     display: ${(props) => (props.display ? props.display : null)};
//     padding: 10px 25px 30px;
//     color: #6b97a4;
//   }
// `;

export const FAQList = styled.div`
  /* width: 80%; */
  padding: 0;
  margin: 0 auto;

  &:first-child{
    border-top: 1px solid #e7eaeb;
  }
`;

export const AnswersList = styled.div`
  /*Question*/
  .question {
    font-size: 24px;
    color: black;
    margin: 0;
    width: 100%;
    padding: 20px 45px 20px 0;
    border-bottom: 1px solid #e7eaeb;
    cursor: pointer;
  }

 
  /*Answer*/
  .answers {
    /* padding: 0px 15px; */
    margin: 25px 0 0 0;
    width: 100% !important;
    height: 0;
    overflow: hidden;
    z-index: -1;
    position: relative;
    opacity: 0;

    transition: 0.3s ease;
  }

  .questions:checked ~ .answers {
    height: auto;
    opacity: 1;
    /* padding: 15px; */
  }

  /*FAQ Toggle*/
  .plus {
    cursor: pointer;
    position: absolute;
    right: 0;
    font-size: 2em;
    color: #497bfd;
    transition: 0.3s ease;

    width: 27px;
    height: 27px;
    border: 1px solid #497bfd;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    line-height: 100%;
    transition: 0.3s ease;
  }

  .questions:checked ~ .plus {
    transform: rotate(45deg);
  }

  .questions {
    display: none;
  }
`;
