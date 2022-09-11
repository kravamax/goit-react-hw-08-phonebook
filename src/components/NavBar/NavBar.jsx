import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';
import UserMenu from 'components/UserMenu';

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.contentBlock}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.activeLink : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="contacts"
          className={({ isActive }) => (isActive ? s.activeLink : undefined)}
        >
          Contacts
        </NavLink>
      </div>
      <div className={s.registerBlock}>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? s.activeLink : undefined)}
        >
          SignUp
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? s.activeLink : undefined)}
        >
          LogIn
        </NavLink>
      </div>
      <UserMenu />
    </nav>
  );
};

export default NavBar;
