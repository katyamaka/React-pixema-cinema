import styled from "styled-components";

const StyledSpinner = styled.div`
  position: relative;
  place-self: center;

  width: 150px;
  height: 150px;

  border: 7px solid #f3f3f3;
  border-radius: 50%;
  border-top-color: #3498db;

  animation: spin 1s linear infinite;

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
