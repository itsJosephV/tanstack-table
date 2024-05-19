export const deviceColumns = [
  {
    id: "select-col",
    header: ({ table }) => (
      <input
        id="select-col"
        className="bg-stone-50 border-stone-400 text-stone-400 focus:ring-0 rounded-sm cursor-pointer"
        type="checkbox"
        checked={table.getIsAllPageRowsSelected()}
        onChange={table.getToggleAllPageRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <input
        className="bg-stone-50 border-stone-400 text-stone-400 focus:ring-0 rounded-sm cursor-pointer"
        type="checkbox"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  },
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Location",
    accessorKey: "location",
  },
  {
    header: "Station name",
    accessorKey: "station-name",
  },
  {
    header: "Sensor",
    accessorKey: "sensor",
    cell: ({ column }) => {
      return (
        <button className="inline-flex text-emerald-700 p-0.5 bg-emerald-200 rounded-md px-2.5">
          {`Edit ${column.columnDef.header}`}
        </button>
      );
    },
    meta: {
      className: "non-pointer",
    },
  },
];
