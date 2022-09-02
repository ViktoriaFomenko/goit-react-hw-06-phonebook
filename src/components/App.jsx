import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add_contact } from 'Redux/actions';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const onAddContact = payload => {
    const action = add_contact(payload);
    dispatch(action);
  };
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const duplicationName = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (duplicationName) {
      toast.warn(`${name} is already in contacts.`);
    } else {
      setContacts(prevContacts => [contact, ...prevContacts]);
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  return (
    <>
      <ToastContainer autoClose={2000} position="top-center" closeOnClick />
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </>
  );
};
