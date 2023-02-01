import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/contacts/selectors';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ width: '300px', marginLeft: '15px' }}>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts </h2>
      {contacts.length > 0 ? <Filter /> : <p>There are no contacts</p>}

      {isLoading && !error && <b>Loading contacts...</b>}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default App;
