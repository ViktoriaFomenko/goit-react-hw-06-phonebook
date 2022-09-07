import { createReducer } from '@reduxjs/toolkit';
import { add_contact, remove_contact } from './contacts -actions';

const contactsReducer = createReducer([], {
  [add_contact]: (store, { payload }) => [...store, payload],
  [remove_contact]: (store, { payload }) =>
    store.filter(({ id }) => id !== payload),
});

export default contactsReducer;
