import styled from "styled-components";

export default styled.button`
background-color: ${props => (props.primary ? "#F7F7F7" : "#354E57")};
border: 1px solid #354E57;
color: #354E57;
width: 173px;
height: 35px;
font-size: 1.4rem;
`;
