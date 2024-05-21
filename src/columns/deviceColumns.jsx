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
      //const isOpen = table.options.meta.isCellModalOpen(rowId);
      console.log(table.options.meta?.openCellModal === rowId, "from column");
      return (
        <>
          <Modal
            key={rowId}
            open={table.options.meta?.openCellModal === rowId}
            onOpenChange={(isOpen) => {
              console.log(isOpen, "isOpenChange");
              table.options.meta?.handleCellModal(isOpen ? rowId : null);
            }}
          >
            <Modal.Button asChild>
              <button
                onClick={() => table.options.meta?.handleCellModal(rowId)}
                className="inline-flex text-emerald-700 p-0.5 bg-emerald-200 rounded-md px-2.5"
              >
                {`Edit ${header}`}
              </button>
            </Modal.Button>

            <Modal.Content
              title="Edit sensor"
              onClose={table.options.meta?.closeCellModal}
            >
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
