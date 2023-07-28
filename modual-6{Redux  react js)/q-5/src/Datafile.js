import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";


const SAMPLE_DATA = [
    { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com" },
    { id: 3, name: "Michael Johnson", age: 40, email: "michael@example.com" },
    // Add more data as needed
  ];

  
const DataTable = () => {
    const data = useMemo(() => SAMPLE_DATA, []);
   
  
    const columns = useMemo(
      () => [
        { Header: "ID", accessor: "id" },
        { Header: "Name", accessor: "name" },
        { Header: "Age", accessor: "age" },
        { Header: "Email", accessor: "email" },
      ],
      []
    );
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state,
      setGlobalFilter,
    } = useTable({ columns, data }, useGlobalFilter);
  
    const { globalFilter } = state;
  
    const handleSearchChange = (e) => {
      const value = e.target.value || "";
      setGlobalFilter(value.toLowerCase());
    };
  
    return (
      <div>
        <input
          type="text"
          value={globalFilter || ""}
          onChange={handleSearchChange}
          placeholder="Search by name"
        />
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default DataTable;
  