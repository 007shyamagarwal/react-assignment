
import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
export default class StateItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {state} = this.props;
        return (
            <tr>
                <td>{state.id}</td>
                <td>{state.code}</td>
                <td>{state.name}</td>
                <td>
                    <Link    to={`/statelist/view/${state.id}`}>
                        View
                    </Link>
                </td>
                <td>
                    <Link  to={`/statelist/edit/${state.id}`}>
                        Edit
                    </Link>
                </td>
            </tr>
        )
    }
} 
StateItem.defaultProps = {
}
StateItem.propTypes = {
}