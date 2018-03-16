
import React, {Component} from "react";
import PropTypes from "prop-types";

import Contact from "./Contact";

const team=[
    { Designation: "CEO", Name:"Anand Sahay" ,img_url:"/assets/anand.jpg"},
    { Designation: "CTO", Name:"Aditya Kalia" ,img_url:"/assets/aditya.jpg"},
    { Designation: "COO", Name:"Karan Nangru" ,img_url:"/assets/karan.jpg"},
    { Designation: "ReactJs Consultant", Name:"Shyam Agarwal" ,img_url:"/assets/shyam.png"},

]
export default class About extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div> 
            <h2>About</h2>
            <div>
                <h3>Xebia</h3>
                    <div style={{"padding-left":"200px"}}>
                        <div >
                            {
                                team.map( (t)=> {
                                    return(
                                        <div>
                                                <img src={t.img_url}
                                                    style={{
                                                        height: '300px',
                                                        width: '250px',
                                                    }} />
                                                <p>Name : {t.Name}</p>
                                                <p>Designation: {t.Designation} </p>
                                                    
                                        </div>
                                        );
                                })
                            }
                        </div>
                        <div>
                    Web developer with lot of interest in web technologies especially reactjs.
                    </div>
                    </div>
            </div>
            </div>
        )
    }
} 


About.defaultProps = {
    
}

About.propTypes = {
    
}