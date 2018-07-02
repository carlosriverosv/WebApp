import React, {Component} from 'react';
import Header from './Header';

export default class User extends Component {

    render(props) {
        return(
            <div>
            <Header/>
            <h3>Bienvenido {this.props.name} </h3>
            </div>
        );
    };
}