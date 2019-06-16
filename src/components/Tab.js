import React from 'react';
import RecentItem from "./RecentItem";
import SavedItem from "./SavedItem";

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tab: "recent"}
        this.tabClick = this.tabClick.bind(this);
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
                        <SavedItem />
                        <SavedItem />
                    </div>    
                </div>)}
        return (
            <div className="tabs">
                <span className="tab bold">Recent</span>
                <span className="tab" onClick={this.tabClick} data-tab="saved">Saved</span> 
                <div className="tab-content">
                    <RecentItem />
                    <RecentItem />
                </div>    
            </div>)
}}

export default Tab;