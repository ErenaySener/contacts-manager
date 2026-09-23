import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactForm from '../components/ContactForm/ContactForm.jsx';
import ContactList from '../components/ContactList/ContactList.jsx';
import Filter from '../components/Filter/Filter.jsx';
import { fetchContacts } from '../redux/contacts/operations.js';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className="contactsPage">
      <div className="contactsHeader">
        <span className="heroBadge">Your phonebook</span>

        <h1 className="contactsTitle">Manage your contacts</h1>

        <p className="contactsSubtitle">
          Add new contacts, search your phonebook and keep everything
          organized in one place.
        </p>
      </div>

      <div className="contactsGrid">
        <div className="contactsPanel">
          <h2 className="contactsPanelTitle">Add contact</h2>
          <p className="contactsPanelText">
            Save a new person to your phonebook.
          </p>

          <ContactForm />
        </div>

        <div className="contactsPanel contactsListPanel">
          <div className="contactsListTop">
            <div>
              <h2 className="contactsPanelTitle">Your contacts</h2>
              <p className="contactsPanelText">
                Search and manage your saved contacts.
              </p>
            </div>

            <Filter />
          </div>

          <ContactList />
        </div>
      </div>
    </section>
  );
}
