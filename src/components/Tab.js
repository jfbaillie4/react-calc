import React from 'react';
import RecentItem from "./RecentItem";
import SavedItem from "./SavedItem";

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tab: "recent"}  
    }

    tabClick = e => {
        this.setState({tab: `${e.currentTarget.dataset.tab}`})
    }
    
    render() {
        if (this.state.tab === "saved") {
            return (
                <div className="tabs">
                    <span className="tab" onClick={this.tabClick} data-tab="recent">Recent</span>
                    <span className="tab bold">Saved</span> 
                    <div className="tab-content">
                        {this.props.savedCalcs.map((calc, index) => <SavedItem key={index} index={index} calc={calc} removeSaved={this.props.removeSaved}/>)}
                    </div>    
                </div>)}
        return (
            <div className="tabs">
                <span className="tab bold">Recent</span>
                <span className="tab" onClick={this.tabClick} data-tab="saved">Saved</span> 
                <div className="tab-content">
                    {this.props.recentCalcs.map((calc, index) => <RecentItem key={index} index={index} calc={calc} toSaved={this.props.toSaved}/>)}
                </div>    
            </div>)
}}

export default Tab;