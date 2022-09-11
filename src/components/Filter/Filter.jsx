import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/contacts-slice';

import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.filterContainer}>
      <h4 className={s.title}>Find contacts by name</h4>

      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
