import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
`;

export const Container = styled.div`
display: block;
margin: 0 auto;
max-width: 1130px;
`;

const Section = ({ children, bgColor, bgImg }) => (
    <Wrapper bgImg={bgImg} bgColor={bgColor}>
      <Container>{children}</Container>
    </Wrapper>
  );
  
export default Section;