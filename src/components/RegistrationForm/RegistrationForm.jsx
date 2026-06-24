import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations.js';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" required />
        </label>

        <label>
          Email
          <Field type="email" name="email" required />
        </label>

        <label>
          Password
          <Field type="password" name="password" required />
        </label>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}