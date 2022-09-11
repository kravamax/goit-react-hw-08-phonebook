import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/auth';
import Container from 'components/Container';
import s from './PageStyles.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value, name } = event.currentTarget;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Container>
        <h3 className={s.pageTitle}>Login Page!</h3>
        <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={s.label}>
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              required
              onChange={handleChange}
            />
          </label>
          <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              required
              onChange={handleChange}
            />
          </label>
          <button className={s.button} type="submit">
            Login
          </button>
        </form>
      </Container>
    </>
  );
};

export default LoginPage;
