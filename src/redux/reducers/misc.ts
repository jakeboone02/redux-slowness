import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
  selectValue: 'one' | 'two' | 'three';
}

export const initialState: State = {
  selectValue: 'one',
};

export const getSelectValue = (state: State) => state.selectValue;

const slice = createSlice({
  name: 'misc',
  initialState,
  reducers: {
    changeSelectValue(state, action: PayloadAction<'one' | 'two' | 'three'>) {
      state.selectValue = action.payload;
    },
  },
});

const { actions, reducer } = slice;

export const { changeSelectValue } = actions;

export default reducer;
