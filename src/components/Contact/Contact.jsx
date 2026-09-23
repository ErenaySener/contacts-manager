import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className="contactItem">
      <div className="contactDetails">
        <div className="contactListAvatar">
          {contact.name.charAt(0).toUpperCase()}
        </div>

        <div className="contactInfo">
          <p className="contactName">{contact.name}</p>
          <p className="contactNumber">{contact.number}</p>
        </div>
      </div>

      <button
        className="deleteContactButton"
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
}
