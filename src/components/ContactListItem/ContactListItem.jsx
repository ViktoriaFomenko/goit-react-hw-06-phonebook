import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { remove_contact } from 'redux/contacts/contacts -actions';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(remove_contact(id));
  };

  return (
    <li className={css.item} key={id}>
      {name}: {number}
      <button className={css.button} type="button" onClick={deleteContact}>
        Delete contact
      </button>
    </li>
  );
};
