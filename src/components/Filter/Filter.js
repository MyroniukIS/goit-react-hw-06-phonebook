import styles from './Filter.module.css';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

function Filter({ onFilterChange }) {
  const filter = useSelector(state => state.contacts.filter);
  return (
    <label className={styles.filter_label}>
      Find contacts by name:
      <input
        className={styles.filter_input}
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
