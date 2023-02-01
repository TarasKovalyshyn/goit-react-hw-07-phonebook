import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {name + ': ' + phone}
      <button type="button" onClick={() => dispatch(deleteContacts(id))}>
    
        Delete
      </button>
    </li>
  );
};
export default ContactItem;
