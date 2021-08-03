import styled from "styled-components";

export const BodyText = styled.p`
color: ${props => props.BodyTextColor || props.theme.fontcolor2};
font-size: 1.4rem;
line-height: 1.7rem; 
`;

export const BodyText2 = styled(BodyText)`
line-height: 2.4rem;
`;

export const BodyText3 = styled(BodyText)`
font-size: 1.2rem;
line-height: 1.6rem;
`;

export const BodyText4 = styled(BodyText)`
font-size: 1.6rem;
line-height: 1.9rem;
`

export default BodyText;