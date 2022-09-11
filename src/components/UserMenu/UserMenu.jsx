import s from './UserMenu.module.css';

const UserMenu = () => {
  const handleLogoutCLick = () => {
    console.log('LogOut!');
  };

  return (
    <div className={s.userMenu}>
      <div>User EMail</div>
      <button type="button" onClick={handleLogoutCLick}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
