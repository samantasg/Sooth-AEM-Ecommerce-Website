import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid #354e57;
  color: #2e2e22;
  background: ${({ disabled }) => (disabled ? "#E4ECEF " : "transparent")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  padding: 0.75rem 2.5rem;
  font-size: 1.4rem;
  &:hover {
    background: ${({ disabled }) => (disabled ? "" : "white")};
  }
`;

export const BrownButton = styled(Button)`
  background: ${({ disabled }) => (disabled ? "#FFFFFF" : "#a67744")};
  color: ${({ disabled }) => (disabled ? "#9A6B39" : "white")};
  padding: 0.75rem 1.25rem;
  border: none;
  &:hover {
    background: #9a6b39;
  }
`;

export const BlueButton = styled(Button)`
  background: ${({ disabled }) => (disabled ? "#B9C1C4" : "#2B434B")};
  color: ${({ disabled }) => (disabled ? "#354E57" : "white")};
  padding: 0.75rem 1.25rem;
  border: none;
  &:hover {
    background: #2B434B;
  }
`;

export const WhiteButton = styled(Button)`
  background-color: transparent;
  padding: 0.75rem 2.5rem;
  border: 1px solid white;
  color: white;
  &:hover {
    background: white;
    color: #547665;
  }
`;

export default Button;