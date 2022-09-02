import styled from "styled-components";

export const BannerWrapper = styled.div`
  max-width: 38.33333%;
  position: absolute;
  top: 7rem;
  color: #fff;

  .m-bottom {
    margin-bottom: 12px;
  }

  @media (max-width: 850px) {
    max-width: 100%;
    padding: 0 15px;
  }
`;

export const BannerHeader = styled.h1<any>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : null)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : null)};
  margin: ${(props) => (props.margin ? props.margin : null)};
  margin-bottom: ${(props) => (props.marginbottom ? props.marginbottom : null)};
  color: ${(props) => (props.color ? props.color : null)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : null)};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : null)};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : null};
  cursor: ${(props) => (props.cursor ? props.cursor : null)};
  transition: 0.3s;
  opacity: ${(props) => (props.opacity ? props.opacity : null)};
  &:hover {
    color: ${(props) => (props.hoverColor ? props.hoverColor : null)};
  }
`;

export const BannerTitleText = styled.div`
  font-size: 1.2rem;
  line-height: 1.2;
  margin-top: -14px;

  margin-bottom: 3rem;
`;

export const HeaderButtonDiv = styled.div<any>`
  padding: ${(props) => (props.padding ? props.padding : null)};

  .play-button {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 36px;
    height: 36px;
    margin-right: 10px;
    border: 2px solid #fff;
    border-radius: 50%;
    transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
    cursor: pointer;
  }

  .play-button::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 3px;
    margin: auto;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 0 6px 10px;
    border-color: transparent transparent transparent #fff;
    transition: border-color 0.3s ease-in-out;
  }
  .play-button:hover {
    background-color: #fff;
  }
  .play-button:hover::before {
    border-color: transparent transparent transparent black;
  }
`;

// export const;
