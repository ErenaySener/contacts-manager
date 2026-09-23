import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice.js';
import { selectNameFilter } from '../../redux/filters/selectors.js';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <label className="filterField">
      <span className="filterLabel">Search contacts</span>

      <input
        className="filterInput"
        type="text"
        placeholder="Search by name..."
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
}
