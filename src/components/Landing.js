import React, { Component } from 'react';
import { Button, Row, Col, Panel } from 'react-bootstrap';
import LoginForm from './LoginForm';
import Header from './Header';

export default class Landing extends Component {

    render(props) {
        return (
            <div>
                <Header />
                <Row className="show-grid">

                    <Col md={6} mdPush={6}>
                        <Panel>
                            <Panel.Body><h3>¿Quieres organizar tu boda? </h3>
                                <Button bsStyle="primary">Regístrate </Button></Panel.Body>
                        </Panel>
                    </Col>

                    <Col md={6} mdPull={6}>
                        <Panel>
                            <Panel.Body>
                                <h3>¿Tu empresa provee productos y servicios para bodas ? </h3>
                                <Button bsStyle="success">Regístrate </Button></Panel.Body>
                        </Panel>
                    </Col>
                </Row>

                <h3>Si ya tienes una cuenta, ingresa</h3>
                <LoginForm 
                login={this.props.handleLogin}
                firstTry = {this.props.firstTry}
                redirectToProfile = {this.props.redirectToProfile}
                slug = {this.props.slug}
                 />
            </div>
        );
    };
}

