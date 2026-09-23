import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <section className="homeHero">
      <div className="heroContent">
        <span className="heroBadge">Simple contact management</span>

        <h1 className="heroTitle">
          Your contacts,
          <br />
          organized in one place.
        </h1>

        <p className="heroText">
          Create an account, save your contacts and keep everything
          organized with a simple and secure phonebook.
        </p>

        <div className="heroActions">
          <NavLink className="heroPrimaryButton" to="/register">
            Get started
          </NavLink>

          <NavLink className="heroSecondaryButton" to="/login">
            Sign in
          </NavLink>
        </div>
      </div>

      <div className="heroPreview">
        <div className="previewHeader">
          <span>Contacts</span>
          <span className="previewCount">3 contacts</span>
        </div>

        <div className="previewContact">
          <div className="contactAvatar">AS</div>
          <div>
            <strong>Alex Smith</strong>
            <span>alex@example.com</span>
          </div>
        </div>

        <div className="previewContact">
          <div className="contactAvatar">JD</div>
          <div>
            <strong>Jane Doe</strong>
            <span>jane@example.com</span>
          </div>
        </div>

        <div className="previewContact">
          <div className="contactAvatar">MB</div>
          <div>
            <strong>Michael Brown</strong>
            <span>michael@example.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
