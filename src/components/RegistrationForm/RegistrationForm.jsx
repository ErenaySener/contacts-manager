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
      <Form className="authForm">
        <label className="formField">
          <span>Name</span>
          <Field
            className="formInput"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
        </label>

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
            placeholder="Create a password"
            required
          />
        </label>

        <button className="authButton" type="submit">
          Create account
        </button>
      </Form>
    </Formik>
  );
}
