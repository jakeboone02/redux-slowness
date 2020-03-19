import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchGridData from './redux/actions/fetchGridData';
import { AppDispatch } from './redux/store';
import { getSelectValue } from './redux/reducers';
import { changeSelectValue } from './redux/reducers/misc';

const Toolbar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectValue = useSelector(getSelectValue);

  return (
    <div>
      <ol>
        <li>
          <button onClick={() => dispatch(fetchGridData(50000))}>
            Load 50000
          </button>{' '}
          rows in the grid
        </li>
        <li>
          Change the value of this uncontrolled <code>&lt;select&gt;</code>{' '}
          (it's fast):{' '}
          <select defaultValue="one">
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </li>
        <li>
          Change the value of this redux-based <code>&lt;select&gt;</code> (it's
          slow):{' '}
          <select
            value={selectValue}
            onChange={e =>
              dispatch(
                changeSelectValue(e.target.value as 'one' | 'two' | 'three')
              )
            }
          >
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </li>
        <li>
          <button onClick={() => dispatch(fetchGridData(500))}>Load 500</button>{' '}
          rows in the grid
        </li>
        <li>Repeat step 3 &mdash; it's quicker now</li>
      </ol>
    </div>
  );
};

export default Toolbar;
