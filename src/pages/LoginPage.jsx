import Container from '../components/Container';
import { useState } from 'react';
import s from './PageStyles.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { value, name } = event.currentTarget;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

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
        <form className={s.form} onSubmit={handleSubmit}>
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
