import styled from "styled-components";

export const StyledTodo = styled.div`
  background-color: ${(props) =>
    props.isCompleted
      ? props.theme.palette.weUse.done
      : props.theme.palette.weUse.notDone};
  box-shadow: 0px 0px 5px gray;
  padding: 20px;
  border-radius: 12px;
  width: 80%;

  @media (min-width: ${(props) => props.theme.screenSizes.phone}px) {
    max-width: 500px;
  }
`;

export const StyledP = styled.p`
  color: ${(props) => props.theme.palette.weUse.black};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const StyledActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;

  @media (min-width: ${(props) => props.theme.screenSizes.phone}px) {
    flex-direction: row;
  }
`;
