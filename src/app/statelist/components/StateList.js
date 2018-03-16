
import React, {Component} from "react";
import PropTypes from "prop-types";
import StateItem from './StateItem';

export default class StateList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchStates();
    }
    render() {
        const {status,error}=this.props;

        if (status) {
            return (
                <div>
                <center>
                    <h2>Loading ... </h2>
                    {/* //<img src="/assets/loading.gif" /> */}
                </center>
                </div>
            )
        }
        const states = this.props.states || [];
        return (
            <div> 
            <h2>State List</h2>
            <table>
                <tr>
                    <th> State Id</th>
                    <th> State code</th>
                    <th> State Name</th>
                    <th>View</th>
                    <th>Edit</th>
                </tr>
                {
                    states.map( state => (
                        <StateItem key={state.id} state={state}/>
                    ))
                }
            </table>

            </div>
        )
    }
} 


StateList.defaultProps = {
    
}

StateList.propTypes = {
    
}