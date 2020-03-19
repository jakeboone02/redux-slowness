import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GRID_TYPE } from '../../constants';
import { IDataTypeOne, IDataTypeThree, IDataTypeTwo } from '../../types';

export interface State {
  [x: string]: (IDataTypeOne | IDataTypeTwo | IDataTypeThree)[];
}

export const initialState: State = {
  [GRID_TYPE.ONE]: [],
  [GRID_TYPE.TWO]: [],
  [GRID_TYPE.THREE]: [],
};

export const getGridData = (
  state: State,
  gridID: string
): (IDataTypeOne | IDataTypeTwo | IDataTypeThree)[] => state[gridID] ?? null;

const slice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    receiveGridData(
      state,
      action: PayloadAction<{
        gridID: string;
        data: (IDataTypeOne | IDataTypeTwo | IDataTypeThree)[];
      }>
    ) {
      state[action.payload.gridID] = action.payload.data;
    },
    requestGridData(state, action: PayloadAction<string>) {
      state[action.payload] = null;
    },
  },
});

const { actions, reducer } = slice;

export const { receiveGridData, requestGridData } = actions;

export default reducer;
