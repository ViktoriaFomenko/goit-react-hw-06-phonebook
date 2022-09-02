import { ADD_CONTACT } from './type';

export const add_contact = payload => {
  return {
    type: ADD_CONTACT,
    payload,
  };
};
