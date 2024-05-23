import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { ArrowUpIcon } from "../../icons/ArrowUp";
import { ArrowDownIcon } from "../../icons/ArrowDown";
import { flexRender } from "@tanstack/react-table";
import { cn } from "../../utils/cn";
import { sensorColumns } from "../../columns/sensorColumns";

/* eslint-disable react/prop-types */
const EditSensorForm = ({ rowData }) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  console.log(rowData.sensors);

  const sensorTable = useReactTable({
    data: rowData.sensors,
    columns: sensorColumns,
    state: { sorting: sorting, globalFilter: filtering, rowSelection },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFiltering,
    onRowSelectionChange: setRowSelection,
    getRowId: (row) => row.id,
  });

  const ascDescIcon = {
    asc: <ArrowUpIcon />,
    desc: <ArrowDownIcon />,
  };

  return (
    <div className="flex flex-col gap-2.5 mt-5">
      <div className="flex justify-between items-center mt-3">
        <input
          onChange={(e) => setFiltering(e.target.value)}
          className="py-1 rounded-md p-1.5 pl-2  border border-stone-400 focus:ring-0 focus:border-stone-500"
          type="text"
          placeholder="Search"
        />
        <div className="flex gap-2 items-center">
          <button className="bg-stone-200 py-1 px-3 rounded-md capitalize">
            edit
          </button>
          <button
            onClick={() => console.log("delete sensor")}
            className="bg-stone-200 py-1 px-3 rounded-md capitalize"
          >
            delete
          </button>
        </div>
      </div>
      <div className="border rounded-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-stone-200">
            {sensorTable.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      className="text-left px-3 py-2 font-semibold text-stone-700 [&:not(:first-child)]:hover:bg-stone-300/50 duration-200 [&:not(:first-child)]:cursor-pointer"
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
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {sensorTable.getRowModel().rows.length > 0 ? (
              sensorTable.getRowModel().rows.map((row) => (
                <tr className="odd:bg-stone-100 capitalize" key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      className={cn("text-left text-stone-500 px-3 py-2.5", {
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
                  colSpan={sensorTable.getAllColumns().length}
                  className="text-center text-stone-500 px-4 py-3"
                >
                  Sensor was not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={() => console.log("add sensor")}
          className="bg-emerald-200 py-1 px-2.5 rounded-md text-emerald-700"
        >
          Add sensor
        </button>
        <p className="text-stone-400">
          {`${rowData.name} - ${rowData.location} - ${rowData["station-name"]}`}
        </p>
      </div>
    </div>
  );
};

export default EditSensorForm;
