import { AppThunk, IDataTypeOne } from '../../types';
import { requestGridData, receiveGridData } from '../reducers/data';
import { GRID_TYPE } from '../../constants';

const fetchGridData = (
  count: number
): AppThunk<Promise<void>> => async dispatch => {
  dispatch(requestGridData(GRID_TYPE.ONE));

  // pause to emulate an API call
  await new Promise(r => setTimeout(r, 500));

  const data: IDataTypeOne[] = [];
  for (let i = 1; i <= count; i++) {
    const obj: IDataTypeOne = {} as any;

    for (let j = 1; j <= 14; j++) {
      obj[`field${j}` as keyof IDataTypeOne] = `${j}~${i}`;
    }

    data.push(obj);
  }

  dispatch(receiveGridData({ gridID: GRID_TYPE.ONE, data }));
};

export default fetchGridData;
