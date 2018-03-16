import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
export default class Header extends Component {
    constructor() {
        super(); //MUST
    }
    static propTypes = {
        title: PropTypes.string.isRequired
    }


    render() {
        return (
            <div>
                <NavLink to="/"  exact className="button" activeClassName="success" >
                     Home
                </NavLink>
                <NavLink to="/statelist" className="button" activeClassName="success">
                     StateList
                </NavLink>
                <NavLink to="/about" className="button" activeClassName="success">
                     About
                </NavLink>
                <NavLink to="/contact" className="button" activeClassName="success">
                     Contact
                </NavLink>
                <NavLink to="/statelist/create" className="button" activeClassName="success">
                     Create State
                </NavLink>
            </div>
        )
    }
}
