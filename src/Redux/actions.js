import { ADD_CONTACT, REMOVE_CONTACT } from './type';
import { nanoid } from 'nanoid';

export const add_contact = payload => {
  return {
    type: ADD_CONTACT,
    payload: {
      id: nanoid(),
      ...payload,
    },
  };
};

export const remove_contact = payload => {
  return {
    type: REMOVE_CONTACT,
    payload,
  };
};
