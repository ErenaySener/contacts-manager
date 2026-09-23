import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className="navigation">
      <NavLink className="brand" to="/">
        Phonebook
      </NavLink>

      <div className="navLinks">
        <NavLink className="navLink" to="/">
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink className="navLink" to="/contacts">
            Contacts
          </NavLink>
        )}
      </div>
    </nav>
  );
}
