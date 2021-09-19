import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { Button, Form, Grid, Header } from "semantic-ui-react";
import { UserContext } from "../contexts/userContexts";

export const LoginRoute = () => {
    const [userMail, setUserEmail] = React.useState('');
    const [user, setUser] = React.useContext(UserContext);
    const location = useLocation();

    const doUserLogin = () => {
        if(!validateEmail(userMail)) return;
        setUser(userMail);
    }

    const validateEmail = (email) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    }

    return (
        !user ? 
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 400 }}>
            <Header as='h2' color='teal' textAlign='center'>
                Log-in to your account
            </Header>
            <Form size='large'>
                <Form.Input 
                    type="email" 
                    fluid icon='user' 
                    iconPosition='left' 
                    placeholder='E-mail address' 
                    onChange={(e) => setUserEmail(e.target.value)} 
                />
                <Button color='teal' fluid size='large' onClick={doUserLogin}>
                    Login
                </Button>
            </Form>
            </Grid.Column>
        </Grid>:
        <Redirect to={location.state.from.pathname}></Redirect>
    )
}
