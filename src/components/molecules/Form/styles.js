import styled from "styled-components";

export const StyledForm = styled.form``;

export const StyledFormControl = styled.div`
  margin-bottom: 0.75rem;
`;

export const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  display: block;
  color: ${(props) => props.theme.palette.dark.main};
  font-size: 1rem;
  font-weight: 700;
`;

export const StyledErrorMessage = styled.p`
  margin-top: 0.1rem;
  margin-bottom: 0.5rem;
  display: block;
  color: ${(props) => props.theme.palette.danger.main};
  font-size: 0.7rem;
  font-weight: 400;
`;
