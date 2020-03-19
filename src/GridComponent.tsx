import React from 'react';
import { useSelector } from 'react-redux';
import { GRID_TYPE } from './constants';
import GridMemoWrapper from './GridMemoWrapper';
import { getGridData, RootState } from './redux/reducers';
import apiManager from './utils/apiManager';
import { ColDef } from 'ag-grid-community';

const columnDefs: ColDef[] = [];
for (let i = 1; i <= 14; i++) {
  columnDefs.push({ field: `field${i}`, headerName: `Field ${i}` });
}

const GridComponent: React.FC = () => {
  const dataOne = useSelector((state: RootState) =>
    getGridData(state, GRID_TYPE.ONE)
  );
  const dataTwo = useSelector((state: RootState) =>
    getGridData(state, GRID_TYPE.TWO)
  );

  return (
    <div className="ag-theme-balham">
      <div style={{ height: 400, width: 600 }}>
        <GridMemoWrapper
          columnDefs={columnDefs}
          context={{ gridID: GRID_TYPE.ONE }}
          rowData={dataOne}
          onGridReady={gre => apiManager.registerGrid(gre)}
        />
      </div>
      <div style={{ height: 400, width: 600 }}>
        <GridMemoWrapper
          columnDefs={columnDefs}
          context={{ gridID: GRID_TYPE.TWO }}
          rowData={dataTwo}
          onGridReady={gre => apiManager.registerGrid(gre)}
        />
      </div>
    </div>
  );
};

export default GridComponent;
