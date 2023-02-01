import { filterChange } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/selectors';
import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';
const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const onChange = e => dispatch(filterChange(e.target.value));
  return (
    <label className={css.label__filter}>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={css.filter__input}
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
export default Filter;
