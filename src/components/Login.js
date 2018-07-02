import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';

export default class Login extends Component {
    state = {
        redirectToProfile: false,
        profile: '/login',
        firstTry: true
    };

    login = (e) => {
        e.preventDefault();
        this.props.login(this.state.user, this.state.pass);
        this.setState(
            {
                redirectToProfile: false,
                firstTry: false
            }
        );
    };

    render() {
        const { redirectToReferrer } = this.state;

        if (this.state.redirectToProfile) {
            return <Redirect to={this.state.login} />;
        }
        return (
            <div>
                <Button bsStyle="primary" onClick={this.login}>Ingresar</Button>
                {
                    this.state.firstTry ?
                        <p></p>
                        :
                        <Alert bsStyle="warning">
                            <strong>Error de usuario o contraseña</strong>
                        </Alert>
                }
            </div>
        );
    };
}