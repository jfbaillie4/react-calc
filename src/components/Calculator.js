import React from 'react';
import Screen from "./Screen";
import Keyboard from "./Keyboard";
import PropTypes from "prop-types";

class Calculator extends React.Component {

    static propTypes = {
        display: PropTypes.string
    };

    render() {
        return (
        <div className={this.props.display === "slide-out" ? "calculator slide-out" : "calculator"}>
            <Screen />
            <Keyboard />
        </div>
        )
    }
}

export default Calculator;