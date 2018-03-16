import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Statecreate extends Component {
    constructor(props) {
        super(props);
        this.state={
            stateInfo:{
                code:'',
                name:''
            }
        }
    }
    changeValue = (e) => {
        const { value, name } = e.target;
        this.state.stateInfo ={...this.state.stateInfo ,[name]: value} 
    }

    saveState= ()=>{
        this.props.saveNewDetails(this.state.stateInfo);
        alert("Created successfully");
        
    }
    
    render() {
        return (
            <div>
                <table className="stateView">
                    <th>Create New State</th>
                    <th></th>
                    <tr>
                        <td>State Name:</td>
                        <td>
                            <input name="name" type="text" required
                            onChange= {(e) => this.changeValue(e)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>State Code:</td>
                        <td>
                            <input name="code" type="text" required
                            onChange= {(e) => this.changeValue(e)}/>
                        </td>
                    </tr>
                </table>
                <center>
                    <button className="button" onClick={this.saveState}> 
                            Submit 
                    </button>
                </center>
            </div>
        )
    }
} 


Statecreate.defaultProps = {
    
}

Statecreate.propTypes = {
    
}