import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  );
}