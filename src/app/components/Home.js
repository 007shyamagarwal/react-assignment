
import React, {Component} from "react";
import PropTypes from "prop-types";

// throw away code
import store from "../store";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div> 
            <h2>Xebia Identity</h2>
            <p style={{"padding":"20px"}}> <b>Xebia explores and creates new frontiers. Always one step ahead of what businesses need, we turn the latest technology trends into advantages for our customers. As a mainstream frontrunner, we create new solutions and build the future with our clients.

An international network of passionate technologists and pioneering craftsmen, Xebia provides the cutting-edge tools, training and consulting services that make businesses work better, smarter, and faster.

<h2 >Structure</h2>
We believe in the power of individuals working together with a clear focus and value the human size of things. We structure ourselves in independent practises and centres of excellence to capture the intellectual energy of our fellow Xebians.

These cells grow organically based on the passion of the members. Together, they create a tight network of coherent and complementary businesses.


</b>
</p>
            </div>
        )
    }
} 


Home.defaultProps = {
    
}

Home.propTypes = {
    
}