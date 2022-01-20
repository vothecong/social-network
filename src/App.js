import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import PageRender from './customRouter/PageRender';
import PrivateRouter from './customRouter/PrivateRouter';
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
        {auth.user && <Header />}
        <Switch>
          <Route path="/" exact component={auth.user ? Home : Login} />
          <Route path="/register" exact component={Register} />
          <PrivateRouter exact path="/:page" component={PageRender} />
          <PrivateRouter exact path="/:page/:id" component={PageRender} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
