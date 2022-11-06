import React from 'react';
// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts-slice';
import { ToastContainer } from 'react-toastify';
import {Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  StyledPhonebookContainer,
  StyledPhonebookTitle,
  StyledTitleContact,
} from 'components/Phonebook/Phonebook.styled';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Message from './Message/Message';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

// const emptyContactsList = [];

export default function Phonebook() {
  // вытягиваем массив контактов из store
  const contacts = useSelector(getContacts);
   const length = contacts.length;

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        transition={Zoom}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <StyledPhonebookContainer>
        <StyledPhonebookTitle> Phonebook</StyledPhonebookTitle>
        <ErrorBoundary>
          <ContactForm />
        </ErrorBoundary>
        <StyledTitleContact>Contacts</StyledTitleContact>
        <ErrorBoundary>
          <Filter />
          {length > 0 ? (
            <ContactList />
          ) : (
            <Message text="Contact list is empty" />
          )}
        </ErrorBoundary>
      </StyledPhonebookContainer>
    </>
  );
}
