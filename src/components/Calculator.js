import React from 'react';
import Screen from "./Screen";
import Keyboard from "./Keyboard";

class Calculator extends React.Component {

    
    render() {
        return (
        <div className="calculator">
            <Screen />
            <Keyboard />
        </div>
        )
    }
}

export default Calculator;