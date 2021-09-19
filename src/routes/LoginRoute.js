import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { Button, Form, Grid, Header } from "semantic-ui-react";
import { UserContext } from "../contexts/userContexts";

export const LoginRoute = () => {
    const [employeeId, setEmployeeId] = React.useState('');
    const {user, setUser} = React.useContext(UserContext);
    const location = useLocation();

    const doUserLogin = () => {
        if(employeeId && employeeId !== ''){
            setUser(employeeId);
        }
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
                    fluid icon='user' 
                    iconPosition='left' 
                    placeholder='Employee Id' 
                    onChange={(e) => setEmployeeId(e.target.value)} 
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
