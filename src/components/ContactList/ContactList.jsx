import css from './ContactList.module.css';

import ContactItem from '../ContactItem/ContactItem';

import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <ul className={css.list__items}>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

export default ContactList;
