import Container from 'components/Container';
import s from './NotFoundPage.module.css';

const ErrorPage = () => {
  return (
    <Container>
      <div className={s.mainText}>
        <h1>Oops....Something went wrong</h1>
        <h2>You accidentally landed on a non-existent page</h2>
      </div>
    </Container>
  );
};

export default ErrorPage;
