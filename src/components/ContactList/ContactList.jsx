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
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}