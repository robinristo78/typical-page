import { Fragment, useEffect, useState } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home.jsx';
import AuthContext from './store/auth-context.jsx';

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    if (JSON.parse(localStorage.getItem('isLoggedUser')) !== null) {
      return JSON.parse(localStorage.getItem('isLoggedUser')).isLogged
    } else {
      return false;
    }
  });

  console.log(loggedIn);

  useEffect(() => {
    const storedLoggedUserData = JSON.parse(localStorage.getItem('isLoggedUser'))
    if (storedLoggedUserData !== null) {
      if (storedLoggedUserData.isLogged !== null) {
        setLoggedIn(true);
      }
    }
  }, []);

  const loginHandler = (user, password) => {
    const loggedUser = localStorage.setItem('isLoggedUser', JSON.stringify({
      username: user,
      isLogged: true
    }));
    setLoggedIn(true);
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedUser');
    setLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={
      {
        loggedIn: loggedIn,
        onLogout: logoutHandler
      }
    }>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!loggedIn && <Login onLogin={loginHandler} />}
        {loggedIn && <Home />}
      </main>
    </AuthContext.Provider>
  )
}

export default App;