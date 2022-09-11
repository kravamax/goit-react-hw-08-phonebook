import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import { authSelectors } from 'redux/auth';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);

  const handleLogoutCLick = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div className={s.userMenu}>
      <div className={s.greeting}>hello, {userName}</div>
      <button className={s.button} type="button" onClick={handleLogoutCLick}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
