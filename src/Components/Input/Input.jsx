import styled from "styled-components";

const Input = styled.input`
  font-size: 1.4rem;
  line-height: 1.7rem;  
  padding: 0.68rem 2.5rem;
  color: ${props => props.inputColor || props.theme.fontcolor2};
  background: ${props => props.inputBackground || props.theme.white};
  border: ${props => props.inputBorder || "1px solid #BACAD1"};
  font-family: ${props => props.theme.primaryFont};

  &:hover {
    background: #FAFAFA;
  }
`;

export default Input;