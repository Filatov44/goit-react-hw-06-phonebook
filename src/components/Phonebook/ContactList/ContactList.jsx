
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts, getFilter } from 'redux/contacts-slice';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import {
  StyledContactList,
  StyledContactItem,
  StyledContactIcon,
  StyledContactDel,
} from 'components/Phonebook/ContactList/ContactList.styled';

export default function ContactList() {
  // вытягиваем массив контактов из store
  const contacts = useSelector(getContacts);

  //вытягиваем из сторе значение фильтра
  const filter = useSelector(getFilter);

  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();

  const normalizetFilter = filter.toLowerCase();

  // фильтруем контакты по фильтру
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizetFilter)
  );

  const elements = filteredContacts.map(({ id, name, number }) => {
    return (
      <StyledContactItem key={id}>
        <StyledContactIcon>
          <FaUserAlt />
        </StyledContactIcon>
        {name}: {number}
        <StyledContactDel onClick={() => dispatch(deleteContact(id))}>
          <FaTrash />
        </StyledContactDel>{' '}
      </StyledContactItem>
    );
  });
  return (
    <>
      <StyledContactList>{elements}</StyledContactList>
    </>
  );
}

ContactList.defaultProps = {
  items: [],
};


