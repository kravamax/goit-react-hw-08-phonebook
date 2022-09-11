import { useSelector } from 'react-redux';
import Navigation from './Navigation';

import UserMenu from 'components/UserMenu';
import AuthNav from './AuthNav';
import authSelectors from 'redux/auth/auth-selectors';

import s from './NavBar.module.css';

const NavBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  // return (
  // <nav className={s.nav}>
  //   <div className={s.contentBlock}>
  //     <NavLink
  //       to="/"
  //       className={({ isActive }) => (isActive ? s.activeLink : undefined)}
  //     >
  //       Home
  //     </NavLink>
  //     <NavLink
  //       to="contacts"
  //       className={({ isActive }) => (isActive ? s.activeLink : undefined)}
  //     >
  //       Contacts
  //     </NavLink>
  //   </div>
  //   <div className={s.registerBlock}>
  //     <NavLink
  //       to="/register"
  //       className={({ isActive }) => (isActive ? s.activeLink : undefined)}
  //     >
  //       SignUp
  //     </NavLink>
  //     <NavLink
  //       to="/login"
  //       className={({ isActive }) => (isActive ? s.activeLink : undefined)}
  //     >
  //       LogIn
  //     </NavLink>
  //   </div>
  //   <UserMenu />
  // </nav>
  // );
  return (
    <header className={s.nav}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default NavBar;
