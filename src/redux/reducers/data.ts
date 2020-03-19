import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GRID_TYPE } from '../../constants';
import {
  AppThunk,
  IDataTypeOne,
  IDataTypeThree,
  IDataTypeTwo,
} from '../../types';
import apiManager from '../../utils/apiManager';

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
    requestGridData_DO_NOT_USE(state, action: PayloadAction<string>) {
      state[action.payload] = null;
    },
  },
});

const { actions, reducer } = slice;

export const { receiveGridData, requestGridData_DO_NOT_USE } = actions;

export const requestGridData = (
  payload: string
): AppThunk<void> => dispatch => {
  dispatch(requestGridData_DO_NOT_USE(payload));
  setTimeout(() => {
    if (apiManager.ready(payload)) {
      apiManager.getGridApi(payload).hideOverlay();
      apiManager.getGridApi(payload).showLoadingOverlay();
    }
  }, 50);
};

export default reducer;
