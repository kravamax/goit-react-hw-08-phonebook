import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import HomePage from '../pages/HomePage';
import ContactsPage from '../pages/ContactsPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import NavBar from './NavBar/NavBar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="contacts" element={<ContactsPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<SignupPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
