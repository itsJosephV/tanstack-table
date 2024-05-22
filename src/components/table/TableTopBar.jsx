import CreateDeviceForm from "../forms/CreateDeviceForm";
import CreateUserForm from "../forms/CreateUserForm";
import { Modal } from "./Modal";

/* eslint-disable react/prop-types */
const TableTopBar = ({ tableContext, table }) => {
  const handleInputOnChange = (e) => {
    table.options.meta?.setFiltering(e.target.value);
  };

  return (
    <div className="bg-stone-200 p-3 py-3.5 rounded-md border flex justify-between items-center">
      <input
        onChange={handleInputOnChange}
        className="rounded-md p-1.5 pl-2 bg-stone-200 border border-stone-400 focus:ring-0 focus:border-stone-500"
        placeholder="Search"
        type="text"
      />
      <div className="flex gap-2 items-center">
        <button
          onClick={() => console.log("edit")}
          className="bg-stone-300 py-1.5 px-3 rounded-md"
        >
          {`Edit ${tableContext}`}
        </button>
        <Modal>
          <Modal.Button className="bg-stone-300 py-1.5 px-3 rounded-md">
            {`Create ${tableContext}`}
          </Modal.Button>
          {/**
           * Add the needed forms in Modal.Content and render according
           * to the tableContext
           */}
          <Modal.Content title={`Create ${tableContext}`}>
            {tableContext === "device" && <CreateDeviceForm table={table} />}
            {tableContext === "user" && <CreateUserForm table={table} />}
          </Modal.Content>
        </Modal>
        <button
          onClick={() => console.log("delete item/s")}
          className="bg-stone-300 py-1.5 px-3 rounded-md"
        >
          {`Delete ${tableContext}/s`}
        </button>
      </div>
    </div>
  );
};

export default TableTopBar;
