import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageRender from './customRouter/PageRender';
import PrivateRoute from './customRouter/PrivateRoute';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import { VerifyAction } from './redux/actions/auth.action';

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);

  useEffect(() => {
    dispatch(VerifyAction())
  }, [dispatch]);


  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={auth.user ? Home : Login} />
          <Route path="/register" exact component={Register} />
          <PrivateRoute exect path='/:page' component={PageRender} />
          <PrivateRoute exect path='/:page/:id' component={PageRender} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
