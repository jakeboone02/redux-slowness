import data, * as fromData from './data';
import misc, * as fromMisc from './misc';
import { combineReducers } from '@reduxjs/toolkit';

export type RootState = Readonly<IRootState>;
interface IRootState {
  data: fromData.State;
  misc: fromMisc.State;
}

export const getGridData = (state: RootState, gridID: string) =>
  fromData.getGridData(state.data, gridID);
export const getSelectValue = (state: RootState) =>
  fromMisc.getSelectValue(state.misc);

const reducer = combineReducers({ data, misc });

export default reducer;
