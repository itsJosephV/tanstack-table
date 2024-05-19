/* eslint-disable react/prop-types */
const TableTopBar = ({ tableContext, setFiltering }) => {
  return (
    <div className="bg-stone-200 p-3 py-3.5 rounded-md border flex justify-between items-center">
      <input
        onChange={(e) => setFiltering(e.target.value)}
        className="rounded-md p-1.5 pl-2 bg-stone-200 border border-stone-400 focus:ring-0 focus:border-stone-500"
        placeholder="Search"
        type="text"
      />
      <div className="flex gap-2 items-center">
        <button
          onClick={() => console.log("Edit")}
          className="bg-stone-300 py-1.5 px-3 rounded-md"
        >
          {`Edit ${tableContext}`}
        </button>
        <button
          onClick={() => console.log("Create")}
          className="bg-stone-300 py-1.5 px-3 rounded-md"
        >
          {`Create ${tableContext}`}
        </button>
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
