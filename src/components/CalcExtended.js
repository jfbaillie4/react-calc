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

    toRecent = (calc) => {
        const recent = this.state.recentCalcs
        recent.length > 14 ? recent.splice(0, 1, calc) : recent.splice(0, 0, calc)
        this.setState({recentCalcs: recent})
    }

    toSaved = (calc, index) => {
        const saved = this.state.savedCalcs
        saved.splice(0,0,calc)

        const recent = this.state.recentCalcs
        const recentitem = recent[index]
        recentitem.saved=true
        recent.splice(index,1,recentitem)

        this.setState({savedCalcs: saved, recentCalcs: recent})
    }

    removeSaved = (calc, index) => {
        const saved = this.state.savedCalcs
        saved.splice(index,1)

        const recent = this.state.recentCalcs
        //this feels a tad hacky to match the whole object, maybe map through and match ID.
        const idx = recent.indexOf(calc)
        const recentitem = recent[idx]
        recentitem.saved=false
        recent.splice(idx,1,recentitem)

        this.setState({savedCalcs: saved, recentCalcs: recent})
    }
    
    render() {
        return (
        <div className="calc-extended">
            <div className={this.state.display === "slide-out" ? "container slide-out" : "container"}>
                <div className="menu" onClick={this.menuClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="#1995DA" /></svg>
                </div>
                <Calculator 
                    display={this.state.display} 
                    recentCalcs={this.state.recentCalcs} 
                    toRecent={this.toRecent}
                    setLastButton={this.setLastButton} 
                    lastButton={this.state.lastButton} 
                    setDisplay={this.setDisplay} 
                    savedCalcs={this.state.savedCalcs}
                />
                <div className="sidebar">
                    <Tab recentCalcs={this.state.recentCalcs} savedCalcs={this.state.savedCalcs} toSaved={this.toSaved} removeSaved={this.removeSaved}/>
                </div>
            </div>
            
        </div>
        )
    }
}

export default CalcExtended;