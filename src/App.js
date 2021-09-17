import React from "react";
import { Switch, Route } from "react-router-dom";
import MainLayout from "./components/main-layout/MainLayout";
import Hackathons from "./routes/hackathons/Hackathon";
import FireDB from "./api/firebase";

const App = () => {
    return (
        <MainLayout >
            <Switch>
                <Route to="/">
                    <Hackathons />
                </Route>
            </Switch>
        </MainLayout>
    )
}

export default App;