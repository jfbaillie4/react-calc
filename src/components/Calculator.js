import React from 'react';
import Screen from "./Screen";
import Keyboard from "./Keyboard";
import PropTypes from "prop-types";

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCalc: [],
            resultState: false,
        }  
    }
    
   buttonClick = (value) => {
        const newArray = this.state.currentCalc
        if (value==="backspace") {
            newArray.pop()
            this.setState({currentCalc: newArray})
            this.props.setLastButton(value)
        } else if (value==="C") {
            newArray.length = 0
            this.setState({currentCalc: newArray})
            this.props.setLastButton(value)
        } else if (value==="=") {
            newArray.push(value)
            this.setState({currentCalc: newArray})
            this.props.setLastButton(value)
            const toOperate = this.state.currentCalc.slice()
            this.props.toRecent(toOperate)
        } else {
            newArray.push(value)
            this.setState({currentCalc: newArray})
            this.props.setLastButton(value)
        }
    }

    handleChange = (event) => {
        const displayArray = event.target.value.split("")
        const lastEntry = displayArray[displayArray.length-1]
        const valids = ["1","2","3","4","5","6","7","8","9","0",".","Backspace", "=", "Enter", "c","(",")","+","-","*","/"]
        if (!valids.includes(lastEntry)) {
            displayArray.pop()
        } else if (lastEntry==="c") {
            displayArray.length = 0
        }
        this.setState({currentCalc: displayArray})
    }

    static propTypes = {
        display: PropTypes.string,
        recentCalcs: PropTypes.array,
    };

    render() {
        return (
        <div className={this.props.display === "slide-out" ? "calculator slide-out" : "calculator"} >
            <Screen 
                currentCalc={this.state.currentCalc} 
                recentCalcs={this.props.recentCalcs} 
                handleChange={this.handleChange} 
                lastButton={this.props.lastButton} 
            />
            <Keyboard buttonClick={this.buttonClick} setDisplay={this.props.setDisplay} />
        </div>
        )
    }
}

export default Calculator;