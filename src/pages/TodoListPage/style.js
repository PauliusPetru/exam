import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: auto;
  margin-top: 2rem;

  @media (min-width: ${(props) => props.theme.screenSizes.phone + 40}px) {
    flex-direction: row;
    padding: 0px 20px;
  }

  @media (min-width: 1250px) {
    justify-content: flex-start;
    gap: 20px 50px;
    padding: 0px 50px;
  }

  @media (min-width: 1800px) {
    gap: 30px 50px;
    padding: 0px 100px;
  }
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 0px 0px;

  button {
    font-size: 18px;
    background-color: ${(props) => props.theme.palette.weUse.main};
  }

  @media (min-width: 765px) {
    width: 15%;
  }
`;
