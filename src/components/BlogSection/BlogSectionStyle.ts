import styled from "styled-components";

export const BlogSectionWrapper = styled.div`
  background-color: #fafbfb;
`;

export const BlogContainer = styled.div`
  padding: 140px 0;
  margin: 0 60px;
`;

export const BlogCardWrap = styled.div`
  padding: 40px 40px 60px;
  display: flex;
  flex-direction: column;
  align-items: baseline;

  background-color: #fff;

  transition: .3s;

  &:hover {
    box-shadow: rgb(0 0 0 / 10%) 0px 14px 12px;
  }
`;
