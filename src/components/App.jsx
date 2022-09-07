import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? [];
  // });

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const [filter, setFilter] = useState('');

  //   const duplicationName = contacts.find(contact => {
  //     return contact.name.toLowerCase() === name.toLowerCase();
  //   });

  //   if (duplicationName) {
  //     toast.warn(`${name} is already in contacts.`);
  //   } else {
  //     setContacts(prevContacts => [contact, ...prevContacts]);
  //   }
  // };

  return (
    <>
      <ToastContainer autoClose={2000} position="top-center" closeOnClick />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
