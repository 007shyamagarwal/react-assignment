import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Address extends Component {
    constructor(props) {
        super(props);

       
    }
    render() {
        const {headOffice,branchOffice}=this.props;
        return (
            <div > 
                <table >
                    <tr>
                        <td>
                            Head Office Address
                        </td>
                        <td>
                            {headOffice.street}<br/>
                            {headOffice.state}<br/>
                            {headOffice.city}<br/>
                            {headOffice.pincode}<br/>
                            {headOffice.phoneNumber}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Branch Office Address
                        </td>
                        <td>
                            {branchOffice.street}<br/>
                            {branchOffice.state}<br/>
                            {branchOffice.city}<br/>
                            {branchOffice.pincode}<br/>
                            {branchOffice.phoneNumber}
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
} 


Address.defaultProps = {
    
}

Address.propTypes = {
    
}