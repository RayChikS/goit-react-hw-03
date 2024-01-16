import { Contact } from './Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul className={css.list}>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};
