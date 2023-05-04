import {
  StyledTable,
  StyledTableHead,
  StyledTableBody,
  StyledTableFooter,
} from './styles';

const Table = ({ data, selected, rowClickAction }) => {
  const tableHeadData = data.reduce((total, item) => {
    Object.keys(item).forEach((x) => {
      if (!total.includes(x)) {
        total.push(x);
      }
    });

    return total;
  }, []);

  const tableBodyData = data.reduce((total, item) => {
    const tableRowData = tableHeadData.map((x) => {
      for (let j in item) {
        if (x === j) {
          return item[j];
        }
      }
      return '';
    });

    total.push(tableRowData);

    return total;
  }, []);

  return (
    <StyledTable>
      <StyledTableHead>
        <tr>
          {tableHeadData.map((item) => (
            <th key={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</th>
          ))}
        </tr>
      </StyledTableHead>
      <StyledTableBody rowClickAction={rowClickAction}>
        {tableBodyData.map((item, index) => (
          <tr key={index} onClick={rowClickAction}>
            {item.map((x, i) => (
              <td key={i}>{x}</td>
            ))}
          </tr>
        ))}
      </StyledTableBody>
      <StyledTableFooter>
        <tr>
          {tableHeadData.map((item) => (
            <th key={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</th>
          ))}
        </tr>
      </StyledTableFooter>
    </StyledTable>
  );
};

export default Table;
