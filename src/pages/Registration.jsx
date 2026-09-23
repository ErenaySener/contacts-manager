import RegistrationForm from '../components/RegistrationForm/RegistrationForm.jsx';

export default function Registration() {
  return (
    <section className="authPage">
      <div className="authCard">
        <h1 className="authTitle">Create account</h1>
        <p className="authSubtitle">
          Register to start managing your contacts.
        </p>

        <RegistrationForm />
      </div>
    </section>
  );
}
