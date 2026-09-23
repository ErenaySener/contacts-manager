import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div className="authNav">
      <NavLink className="authLink registerLink" to="/register">
        Register
      </NavLink>

      <NavLink className="authLink loginLink" to="/login">
        Login
      </NavLink>
    </div>
  );
}
