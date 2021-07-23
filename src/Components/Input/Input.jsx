import styled from "styled-components";

const Input = styled.input`
  font-size: 1.4rem;
  line-height: 1.7rem;  
  padding: 1.5rem 14.5rem 1.2rem 2.3rem;
  color: ${props => props.inputColor || "#354E57"};
  background: ${props => props.inputBackground || "white"};
  border: ${props => props.inputBorder || "1px solid #BACAD1"};

  &:hover {
    background: #FAFAFA;
  }
`;

export default Input;