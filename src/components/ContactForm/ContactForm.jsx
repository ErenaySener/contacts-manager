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
      <Form>
        <label>
          Name
          <Field type="text" name="name" required />
        </label>

        <label>
          Number
          <Field type="tel" name="number" required />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}