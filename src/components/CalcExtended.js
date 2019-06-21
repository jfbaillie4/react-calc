import React from 'react';
import Calculator from './Calculator'
import Tab from './Tab'

class CalcExtended extends React.Component {

    constructor(props) {
        super(props);
        this.state = {display: "standard"}  
    }
    
    menuClick = () => {
        this.state.display === "standard" ? this.setState({display: "slide-out"}) : this.setState({display: "standard"});
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
                <Calculator display={this.state.display}/>
                <div className="sidebar">
                    <Tab />
                </div>
            </div>
            
        </div>
        )
    }
}

export default CalcExtended;