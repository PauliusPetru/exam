import styled from "styled-components";

export const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 40px;
  margin-top: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
`;

export const ListItemButton = styled.button`
  margin: 0 5px;
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #0062cc;
    color: #fff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
