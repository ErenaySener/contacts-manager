import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact.jsx';
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from '../../redux/contacts/selectors.js';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className="contactListWrapper">
      {isLoading && <p className="contactsStatus">Loading...</p>}

      {error && (
        <p className="contactsStatus contactsError">
          Something went wrong. Please try again.
        </p>
      )}

      {!isLoading && !error && contacts.length === 0 && (
        <p className="contactsStatus">
          No contacts found.
        </p>
      )}

      <ul className="contactList">
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
