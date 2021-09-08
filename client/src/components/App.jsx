import React, { useEffect } from 'react';
import Navbar from './navbar/Navbar';
import './app.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Registration from './authorization/Registration';
import Login from './login/Login';
import Main from './main/Main';
import Kon from './kon/Kon';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../actions/user';

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const isId = useSelector((state) => state.user.currentUser.role);
  const Rolles = `/${isId}`;
  console.log(Rolles);

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <div className='wrap'>
          {!isAuth ? (
            <Switch>
              <Route path='/registration' component={Registration} />
              <Route path='/login' component={Login} />
              {/* <Redirect to='/login'/> */}
            </Switch>
          ) : (
            <Switch>
              <Route path='/kon' component={Kon} />

              {/* <Route path="/main" component={Main}/> */}
              <Redirect to='/kon' />
            </Switch>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
