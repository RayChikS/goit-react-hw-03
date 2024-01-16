import { useState } from 'react';
import { ContactForm } from './ContactForm.jsx';
import { ContactList } from './ContactList.jsx';
import { SearchBox } from './SearchBox.jsx';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  message: Yup.string()
    .min(3, 'Too short')
    .max(256, 'Too long')
    .required('Required'),
  level: Yup.string().oneOf(['good', 'neutral', 'bad']).required('Required'),
});

export const App = () => {
  const initialContacts = {
    name: '',
    number: '',
    id: nanoid(),
  };

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};
