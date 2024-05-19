export const firstPage = (table) => {
  if (table.getCanPreviousPage()) {
    table.setPageIndex(0);
  }
};
export const previousPage = (table) => {
  if (table.getCanPreviousPage()) {
    table.previousPage();
  }
};
export const nextPage = (table) => {
  if (table.getCanNextPage()) {
    table.nextPage();
  }
};
export const lastPage = (table) => {
  if (table.getCanNextPage()) {
    table.setPageIndex(table.getPageCount() - 1);
  }
};
