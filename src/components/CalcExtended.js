import React from 'react';
import Calculator from './Calculator'
import Tab from './Tab'

class CalcExtended extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: "standard",
            recentCalcs: [],
            savedCalcs: [],
            lastButton: null,
        }  
    }
    
    menuClick = () => {
        this.state.display === "standard" ? this.setState({display: "slide-out", lastButton: "menu"}) : this.setState({display: "standard", lastButton: "menu"});
    }

    setLastButton = (value) => {
        this.setState({lastButton: value})
    }
    
    render() {
        return (
        <div className="calc-extended">
            <div className={this.state.display === "slide-out" ? "container slide-out" : "container"}>
                <div className="menu" onClick={this.menuClick}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <Calculator 
                    display={this.state.display} 
                    recentCalcs={this.state.recentCalcs} 
                    setLastButton={this.setLastButton} 
                    lastButton={this.state.lastButton} 
                    setDisplay={this.setDisplay} 
                />
                <div className="sidebar">
                    <Tab />
                </div>
            </div>
            
        </div>
        )
    }
}

export default CalcExtended;