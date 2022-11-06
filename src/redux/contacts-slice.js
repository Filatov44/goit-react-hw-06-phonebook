import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const persistContactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;