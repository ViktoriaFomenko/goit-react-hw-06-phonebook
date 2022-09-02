import { createStore } from 'redux';
import { ADD_CONTACT } from './type';

const initialStore = {
  contacts: [],
};

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      const newContacts = [...store.contacts, action.payload];
      return { ...store, contacts: newContacts };
    default:
      return store;
  }
};

const store = createStore(reducer);

export default store;
