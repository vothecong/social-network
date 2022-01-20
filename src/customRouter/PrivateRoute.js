const { useSelector } = require("react-redux");
const { Redirect } = require("react-router-dom");
const { Route } = require("react-router-dom");


const PrivateRoute = (props) => {
    const { auth } = useSelector(state => state);
    return auth.user ? <Route {...props} /> : <Redirect to="/" />
}

export default PrivateRoute;
