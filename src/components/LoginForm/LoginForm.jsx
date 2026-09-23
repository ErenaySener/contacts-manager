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
      <Form className="authForm">
        <label className="formField">
          <span>Email</span>
          <Field
            className="formInput"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="formField">
          <span>Password</span>
          <Field
            className="formInput"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </label>

        <button className="authButton" type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
}
