import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const userNameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor={userNameId}>Name</label>
        <Field
          className={css.field}
          type="text"
          name="username"
          id={userNameId}
        />

        <label htmlFor={numberId}>Number</label>
        <Field className={css.field} type="phone" name="phone" id={numberId} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
