/* eslint-disable react/prop-types */
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {
  firstPage,
  previousPage,
  nextPage,
  lastPage,
} from "../../pagination/pagination.methods";

import PaginationButton from "./PaginationButton";
import { useState } from "react";
import { ArrowUpIcon } from "../../icons/ArrowUp";
import { ArrowDownIcon } from "../../icons/ArrowDown";
import { cn } from "../../utils/cn";
import TableTopBar from "./TableTopBar";

const Table = ({ data, column, tableContext }) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: data,
    columns: column,
    state: { sorting: sorting, globalFilter: filtering, rowSelection },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFiltering,
    onRowSelectionChange: setRowSelection,
    getRowId: (row) => row.id,
    meta: {
      setFiltering,
    },
  });

  const currentPage = table.getState().pagination.pageIndex;

  const actions = [
    {
      action: "first",
      disabled: !table.getCanPreviousPage(),
      onClick: () => firstPage(table),
    },
    {
      action: "previous",
      disabled: !table.getCanPreviousPage(),
      onClick: () => previousPage(table),
    },
    {
      action: "next",
      disabled: !table.getCanNextPage(),
      onClick: () => nextPage(table),
    },
    {
      action: "last",
      disabled: !table.getCanNextPage(),
      onClick: () => lastPage(table),
    },
  ];

  const ascDescIcon = {
    asc: <ArrowUpIcon />,
    desc: <ArrowDownIcon />,
  };

  return (
    <div className="flex flex-col gap-2.5">
      {/**Top bar Component start */}

      <TableTopBar tableContext={tableContext} table={table} />
      {/**Top bar Component end */}
      {/**Table Component start */}
      <div className="border border-stone-200 rounded-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-stone-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className="" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className={cn(
                      "text-left px-4 py-2.5 font-semibold text-stone-700 [&:not(:first-child)]:hover:bg-stone-300/50 duration-200 [&:not(:first-child)]:cursor-pointer",
                      {
                        "bg-stone-300/50": header.column.getIsSorted(),
                      },
                      {
                        "pointer-events-none cursor-default":
                          header.column.columnDef.meta?.className ===
                          "non-pointer",
                      }
                    )}
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {ascDescIcon[header.column.getIsSorted() ?? null]}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr className="odd:bg-stone-100" key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      className={cn("text-left text-stone-500 px-4 py-3", {
                        "text-stone-700":
                          cell.column.columnDef.header === "Name",
                      })}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={table.getAllColumns().length}
                  className="text-center text-stone-500 px-4 py-3"
                >
                  User was not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/**Table Component end */}
      {/**pagination buttons start */}
      <div className="flex items-center gap-3">
        <div className="flex gap-2">
          {actions.map((pagButton) => {
            return (
              <PaginationButton
                key={pagButton.action}
                disabled={pagButton.disabled}
                onClick={pagButton.onClick}
                action={pagButton.action}
              />
            );
          })}
        </div>
        <p className="text-sm text-stone-500">
          Page: {currentPage + 1} of {table.getPageCount()}
        </p>
      </div>
      {/**pagination buttons end */}
    </div>
  );
};

export default Table;
