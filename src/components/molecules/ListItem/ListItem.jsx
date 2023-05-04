import React from "react";
import { StyledListItem, ListItemButton } from "./style";

const ListItem = ({ client, onEdit }) => {
  return (
    <StyledListItem>
      <div>
        {client.name} {client.surname}
      </div>
      <div>{`${client.startYear}/${client.startMonth} - ${client.endYear}/${client.endMonth}`}</div>
      <ListItemButton onClick={() => onEdit(client)}>Edit</ListItemButton>
    </StyledListItem>
  );
};

export default ListItem;
