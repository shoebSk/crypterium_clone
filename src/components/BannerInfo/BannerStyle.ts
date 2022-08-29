import styled from "styled-components";

export const BannerWrapper = styled.div`
  max-width: 38.33333%;
  position: absolute;
  top: 7rem;
  color: #fff;

  .m-bottom {
    margin-bottom: 12px;
  }
`;

export const BannerHeader = styled.h1<any>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : null)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : null)};
  margin: ${(props) => (props.margin ? props.margin : null)};

  margin-bottom: ${(props) => (props.marginbottom ? props.marginbottom : null)};
  color: ${(props) => (props.color ? props.color : null)};

  text-align: ${(props) => (props.textAlign ? props.textAlign : null)};
  line-height: ${(props) => props.lineHeight ? props.lineHeight : null};
 
`;

export const BannerTitleText = styled.div`
  font-size: 1.2rem;
  line-height: 1.2;
  margin-top: -14px;

  margin-bottom: 3rem;
`;

export const HeaderButtonDiv = styled.div<any>`
  padding: ${(props) => (props.padding ? props.padding : null)};
`;

// export const;
