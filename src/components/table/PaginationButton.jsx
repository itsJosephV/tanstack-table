/* eslint-disable react/prop-types */
const PaginationButton = ({ action, disabled, onClick }) => {
  return (
    <button
      className="bg-stone-200 hover:bg-stone-300/80 capitalize py-1 px-2.5 rounded-md disabled:opacity-60 disabled:pointer-events-none duration-200"
      onClick={onClick}
      disabled={disabled}
    >
      {action}
    </button>
  );
};

export default PaginationButton;
