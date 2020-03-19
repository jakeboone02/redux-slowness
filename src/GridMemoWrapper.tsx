import { GridOptions } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React from 'react';

const GridMemoWrapper: React.FC<GridOptions> = props => (
  <AgGridReact {...props} />
);

GridMemoWrapper.displayName = 'GridMemoWrapper';

export default React.memo(GridMemoWrapper);
