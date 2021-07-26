import styled from "styled-components";

export const Heading = styled.h1`
color: ${props => props.HeadingColor || "#354E57"};
font-size: 4.8rem;
line-height: 5.8rem;
font-weight: bold;
`;

export const Heading2 = styled(Heading)`
font-size: 4.0rem;
line-height: 4.9rem;
`;

export const Heading3 = styled(Heading)`
font-size: 3.2rem;
line-height: 3.9rem;
`;

export const Heading4 = styled(Heading)`
font-size: 2.8rem;
line-height: 3.4rem;
`;

export const Heading5 = styled(Heading)`
font-size: 1.8rem;
line-height: 2.2rem;
`;

export const Heading6 = styled(Heading)`
font-size: 1.4rem;
line-height: 1.7rem;
`;

export default Heading;