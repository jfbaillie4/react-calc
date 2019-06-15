import React from 'react';
import Calculator from './Calculator'
import Tab from './Tab'

class CalcExtended extends React.Component {

    menuClick = () => {
        console.log("Click!")
    }
    
    render() {
        return (
        <div className="calc-extended">
            <div className="container">
                <div className="menu" onClick={this.menuClick}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <Calculator />
            </div>
            <div className="sidebar">
                    <Tab />
                </div>
        </div>
        )
    }
}

export default CalcExtended;