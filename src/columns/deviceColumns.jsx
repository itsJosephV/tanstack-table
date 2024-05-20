import { createColumnHelper } from "@tanstack/react-table";
import { Modal } from "../components/table/Modal";

const columnHelper = createColumnHelper();

export const deviceColumns = [
  columnHelper.accessor("", {
    id: "select-col",
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
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("location", {
    header: "Location",
  }),
  columnHelper.accessor("station-name", {
    header: "Station name",
  }),
  columnHelper.accessor("sensor", {
    header: "Sensor",
    cell: ({ column, table, cell }) => {
      const rowId = cell.row.id;
      const header = column.columnDef.header;
      const isOpen = table.options.meta.isCellModalOpen(rowId);
      console.log(isOpen);
      return (
        <>
          <Modal
            open={isOpen}
            onOpenChange={(open) => {
              console.log(open);
              table.options.meta?.handleCellModal(rowId, open);
            }}
          >
            <Modal.Button asChild={true}>
              <button className="inline-flex text-emerald-700 p-0.5 bg-emerald-200 rounded-md px-2.5">
                {`Edit ${header}`}
              </button>
            </Modal.Button>

            <Modal.Content title="Edit sensor">
              <div>{`Modal for sensor ${rowId}`}</div>
            </Modal.Content>
          </Modal>
        </>
      );
    },
    meta: {
      className: "non-pointer",
    },
  }),
];
