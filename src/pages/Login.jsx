import LoginForm from '../components/LoginForm/LoginForm.jsx';

export default function Login() {
  return (
    <section className="authPage">
      <div className="authCard">
        <h1 className="authTitle">Welcome back</h1>
        <p className="authSubtitle">
          Sign in to access your contacts.
        </p>

        <LoginForm />
      </div>
    </section>
  );
}
