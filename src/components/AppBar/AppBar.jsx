import { useSelector } from 'react-redux';

import Navigation from '../Navigation/Navigation.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import UserMenu from '../UserMenu/UserMenu.jsx';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className="appBar">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
