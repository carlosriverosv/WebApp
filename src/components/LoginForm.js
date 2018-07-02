import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Col, Button, Checkbox, ControlLabel, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Login from './Login';

export default class LoginForm extends Component {

    state = {
        user: '',
        pass: '',
        profile: '/user/carlos'
    };

    onLogin = (e) => {
        e.preventDefault();
        this.props.login(this.state.user, this.state.pass);
    };

    onUserChange = (e) => {
        this.setState({ user: e.target.value })
    };

    onPassChange = (e) => {
        this.setState({ pass: e.target.value })
    }

    render(props) {
        if (this.props.redirectToProfile) {
            return <Redirect to={`/user/${this.props.slug}`} />;
        } else {
            return (
                <div>
                    {
                        this.props.firstTry ?
                            <p></p>
                            :
                            <Alert bsStyle="warning">
                                <strong>Error de usuario o contraseña</strong>
                            </Alert>
                    }
                    <Form horizontal onSubmit={this.onLogin}>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col sm={10}>
                                <FormControl type="email" placeholder="Correo electrónico" onChange={this.onUserChange} />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col sm={10}>
                                <FormControl type="password" placeholder="Contraseña" onChange={this.onPassChange} />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Checkbox>Remember me</Checkbox>
                            </Col>
                        </FormGroup>
                        <Button bsStyle="primary" type="submit">Ingresar</Button>
                    </Form>
                </div>
            );
        }
    };
}