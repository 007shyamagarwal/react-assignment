import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
export default class Stateview extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("incwm",id);
        const id = this.props.match.params.id;
        this.props.fetchStateById(id);
    }

    render() {
        const state = this.props.viewState || null;
        const{status,error}=this.props;

        
        return (
            <div id="stateView">
                <table className="stateView">
                    <th>State Details</th>
                    <th></th>
                    <tr>
                        <td>State ID:</td>
                        <td>{state.id}</td>
                    </tr>
                    <tr>
                        <td>State Name:</td>
                        <td>{state.name}</td>
                    </tr>
                    <tr>
                        <td>State Code:</td>
                        <td>{state.code}</td>
                    </tr>
                </table>
            </div>
              
        )
    }
}