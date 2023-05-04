import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
`;

export const StyledTableHead = styled.thead`
  th {
    border-bottom: ${(props) =>
      `2px solid ${props.theme.palette.secondary.main}`};
    padding: 0.5em 0.75em;
    vertical-align: top;
    font-size: 1em;
    line-height: 1.5;
    font-weight: 700;
    color: ${(props) => props.theme.palette.dark.main};
    text-align: left;
  }
`;

export const StyledTableBody = styled.tbody`
  td {
    border-bottom: ${(props) =>
      `1px solid ${props.theme.palette.secondary.main}`};
    padding: 0.5em 0.75em;
    vertical-align: top;
    font-size: 1em;
    line-height: 1.5;
    font-weight: 400;
    color: ${(props) => props.theme.palette.dark.main};
    text-align: left;
  }
  tr {
    cursor: ${(props) => (props.rowClickAction ? 'pointer' : 'initial')};
  }

  tr:last-child {
    td {
      border-bottom-width: 0px;
    }
  }
`;

export const StyledTableFooter = styled.thead`
  th {
    border-top: ${(props) => `2px solid ${props.theme.palette.secondary.main}`};
    padding: 0.5em 0.75em;
    vertical-align: top;
    font-size: 1em;
    line-height: 1.5;
    font-weight: 700;
    color: ${(props) => props.theme.palette.dark.main};
    text-align: left;
  }
`;
