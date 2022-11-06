import React from 'react';
// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { getContacts} from 'redux/contacts-slice';

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

  // const [contacts, setContacts] = useState(() => {
  //   const contactList = JSON.parse(localStorage.getItem('contacts'));
  //   return contactList ?? emptyContactsList
  // })

  // const [filter, setFilter] = useState('');

  // const length = contacts.length;

  // useEffect(() => {

  //   return  localStorage.setItem('contacts', JSON.stringify(contacts));

  // }, [contacts]);

  // const addContacts = contact => {
  //   if (isDuplicate(contact)) {
  //     return alert(`${contact.name} is already in contacts`);
  //   }
  //   setContacts(prev => {
  //     const newContact = {
  //       id: nanoid(),
  //       ...contact,
  //     };
  //     return [...prev, newContact];
  //   });
  // };

  // const deliteContact = id => {
  //    setContacts(contacts.filter(item => item.id !== id))
  // };

  // const changeFilter = e => {
  //   setFilter({ filter: e.currentTarget.value });
  // };

  // const getfiltredContacts = () => {
  //   if (!filter) {
  //     return contacts;
  //   }

  //   const normalizetFilter = filter.toLowerCase();
  //   const filteredContact = contacts.filter(({ name }) => {
  //     const normalizedContact = name.toLowerCase();
  //     const result = normalizedContact.includes(normalizetFilter);
  //     return result;
  //   });
  //   return filteredContact;
  // }

  // const filterContacts = getfiltredContacts();

  return (
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
  );
}
