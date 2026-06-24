import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations.js';

export default function LoginForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Email
          <Field type="email" name="email" required />
        </label>

        <label>
          Password
          <Field type="password" name="password" required />
        </label>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}