import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import contactsReducer from './contacts/contacts -reducer';
import filterReducer from './filter/filter -reducer';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedContactsReducer,
});

export const persistore = persistStore(store);
