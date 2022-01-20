import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Register() {
    const history = useHistory();
    const { auth } = useSelector(state => state);

    useEffect(() => {
        if (auth.user) history.push("/")
    }, [auth.user, history])

    return (
        <div>
            Register Screen
        </div>
    )
}

export default Register;
