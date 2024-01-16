import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;

  return (
    <li key={id} className={css.contactItem}>
      <div>
        <div className={css.item}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.item}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>

      <button className={css.btn} type="module">
        Delete
      </button>
    </li>
  );
};
