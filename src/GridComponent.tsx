import { ColDef } from 'ag-grid-community';
import React from 'react';
import { useSelector } from 'react-redux';
import { GRID_TYPE } from './constants';
import GridMemoWrapper from './GridMemoWrapper';
import { getGridData, RootState } from './redux/reducers';

const columnDefs: ColDef[] = [];
for (let i = 1; i <= 14; i++) {
  columnDefs.push({ field: `field${i}`, headerName: `Field ${i}` });
}

const gridStyle: React.CSSProperties = { height: 400, width: 600 };

const GridComponent: React.FC = () => {
  const dataOne = useSelector((state: RootState) =>
    getGridData(state, GRID_TYPE.ONE)
  );
  const dataTwo = useSelector((state: RootState) =>
    getGridData(state, GRID_TYPE.TWO)
  );

  return (
    <div className="ag-theme-balham">
      <div style={gridStyle}>
        <GridMemoWrapper columnDefs={columnDefs} rowData={dataOne} />
      </div>
      <div style={gridStyle}>
        <GridMemoWrapper columnDefs={columnDefs} rowData={dataTwo} />
      </div>
    </div>
  );
};

export default GridComponent;
