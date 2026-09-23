import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations.js';

export default function ContactForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form className="contactForm">
        <label className="formField">
          <span>Name</span>
          <Field
            className="formInput"
            type="text"
            name="name"
            placeholder="Contact name"
            required
          />
        </label>

        <label className="formField">
          <span>Phone number</span>
          <Field
            className="formInput"
            type="tel"
            name="number"
            placeholder="+49 123 456789"
            required
          />
        </label>

        <button className="contactButton" type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
