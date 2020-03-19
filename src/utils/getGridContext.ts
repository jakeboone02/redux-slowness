import { GridApi, GridOptionsWrapper } from 'ag-grid-community';

interface GridApiPrivateMembers extends Omit<GridApi, 'gridOptionsWrapper'> {
  gridOptionsWrapper: GridOptionsWrapper;
}

const getGridContext = (api: GridApi) =>
  ((api as unknown) as GridApiPrivateMembers).gridOptionsWrapper.getContext();

export default getGridContext;
