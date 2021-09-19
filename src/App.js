import React from "react";
import { Switch, Route } from "react-router-dom";
import MainLayout from "./components/main-layout/MainLayout";
import Hackathons from "./routes/hackathons/Hackathon";
import { LoginRoute } from "./routes/LoginRoute";
import { ProtectedRoute } from "./components/app-auth/ProtectedRoute";
import { UserProvider } from './contexts/userContexts';

const App = () => {
    return (
        <UserProvider>
            <MainLayout >
                <Switch>
                    <ProtectedRoute exact={true} path="/" >
                        <Hackathons />
                    </ProtectedRoute>
                    <Route path='/login'>
                        <LoginRoute />
                    </Route>
                </Switch>
            </MainLayout>
        </UserProvider>
    )
}

export default App;