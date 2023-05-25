import PropTypes from 'prop-types';
import css from "./Filter.module.css"; // підключення стилів на картку

// Імпортуємо хук
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/filterContacts";
import { getStatusFilter } from 'redux/selectors';

export const Filter = () => {

  const dispatch = useDispatch();// Отримуємо посилання на функцію відправки екшенів
  const filter = useSelector(getStatusFilter);// ОТРИМАННЯ FILTER


  

    return (
      <div className={css.form__filter}>
          <label htmlFor="Find"></label>
          <input
          value={filter}
          onChange={event => dispatch(setFilter(event.target.value.trim()))}
          className={css.filter__input}
          type="text"
          name="filter"
          placeholder="Find contacts by name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
      </div>

    );
  }
  

Filter.propTypes = {
  filter: PropTypes.string.isRequired, // рядок
  handleChange: PropTypes.func.isRequired // функція
};
