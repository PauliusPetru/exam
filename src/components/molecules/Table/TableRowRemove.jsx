const TableRowRemove = ({ render }) => {
  const removeRow = (e) => (e.target.parentElement.style.display = 'none');

  return render(removeRow);
};

export default TableRowRemove;
