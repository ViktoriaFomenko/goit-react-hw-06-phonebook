import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { FilteredNames } from 'redux/contacts/contacts -selectors';

export const ContactList = () => {
  const contacts = useSelector(FilteredNames);
  return (
    <ul className={css.list}>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <ContactListItem key={id} name={name} number={number} id={id} />
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
