import styled from "styled-components";

const StyledSpinner = styled.div`
  position: relative;
  place-self: center;
  width: 30px;
  height: 30px;
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top-color: #3498db;

  &:hover {
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { StyledSpinner };
