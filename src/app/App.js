import React from 'react';
import Header from "./components/Header";
import PropTypes from 'prop-types';
export class App extends React.Component {
    render() {
        return (
            <div>
                <Header title="Product App" />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }

}