import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';

import HomePage from '../pages/HomePage';
import ContactsPage from '../pages/ContactsPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import NavBar from './NavBar/NavBar';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {!isFetchingCurrentUser && (
        <>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="register"
              element={
                <PublicRoute>
                  <SignupPage />
                </PublicRoute>
              }
            ></Route>

            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </>
      )}

      <Toaster />
    </>
  );
};

export default App;
