import styled from "styled-components";

export const Button = styled.button`
  border: ${props => props.buttonBorder || "1px solid #354e57"};
  color: ${props => props.buttonColor || props.theme.fontcolor3};
  background: ${({ disabled }) => (disabled ? "#E4ECEF " : "transparent")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  font-family: ${props => props.theme.primaryFont};
  padding: 0.75rem 2.5rem;
  font-size: 1.4rem;
  &:hover {
    background: ${props => props.inputBackground || props.theme.white};
    color: ${props => props.inputColor || props.theme.fontcolor2};
  }
`;

export const BrownButton = styled(Button)`
  background: ${({ disabled }) => (disabled ? "#FFFFFF" : "#a67744")};
  color: ${({ disabled }) => (disabled ? "#9A6B39" : "white")};
  padding: 0.88rem 1.25rem;
  border: none;
  &:hover {
    background: #9a6b39;
    color: ${props => props.inputColor || props.theme.white};
  }
`;

export const BlueButton = styled(Button)`
  background: ${({ disabled }) => (disabled ? "#B9C1C4" : "#2B434B")};
  color: ${({ disabled }) => (disabled ? "#354E57" : "white")};
  padding: ${props => props.buttonPadding || "0.88rem 1.25rem"};
  border: none;
  &:hover {
    background: #2B434B;
    color: ${props => props.inputColor || props.theme.white};
  }
`;

export const WhiteButton = styled(Button)`
  background-color: transparent;
  padding: 0.75rem 2.5rem;
  border: 1px solid white;
  color: white;
  &:hover {
    background: white;
    color: ${props => props.inputColor || props.theme.fontcolor2};
  }
`;

export default Button;