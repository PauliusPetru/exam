import { useState } from "react";
import { useTheme } from "styled-components";

const TableRowSelect = ({ render }) => {
  const theme = useTheme();
  const [selected, setSelected] = useState("");

  const selectRow = (e) => {
    const styles = getComputedStyle(e.target.parentElement);

    if (styles.backgroundColor === theme.palette.primary.main) {
      e.target.parentElement.style.backgroundColor = theme.palette.light.main;
    } else {
      e.target.parentElement.style.backgroundColor = theme.palette.primary.main;
    }

    setSelected(e.target);
  };

  return render(selected, selectRow);
};

export default TableRowSelect;
