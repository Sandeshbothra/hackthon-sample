import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../contexts/userContexts';

export const ProtectedRoute = ({children, rest}) => {
    const [user] = React.useContext(UserContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
            user ? (
            children
            ) : (
            <Redirect
                to={{ pathname: "/login", state: { from: location } }}
            />
            )
        }
        />
    );
}