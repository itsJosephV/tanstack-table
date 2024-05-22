import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const fakeDataColumns = [
  columnHelper.accessor("", {
    id: "select-fake-data-col",
    header: ({ table }) => {
      return (
        <input
          id="select-col"
          className="bg-stone-50 border-stone-400 text-stone-400 focus:ring-0 rounded-sm cursor-pointer"
          type="checkbox"
          checked={table.getIsAllPageRowsSelected()}
          onChange={table.getToggleAllPageRowsSelectedHandler()}
        />
      );
    },
    cell: ({ row }) => {
      return (
        <input
          className="bg-stone-50 border-stone-400 text-stone-400 focus:ring-0 rounded-sm cursor-pointer"
          type="checkbox"
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
        />
      );
    },
  }),
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("first_name", {
    header: "Name",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("gender", {
    header: "Gender",
  }),
];
