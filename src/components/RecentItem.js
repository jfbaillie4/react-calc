import React from 'react';

class RecentItem extends React.Component {

    
    render() {
        return (
            <div className="tab-line">
                <span>{this.props.item}</span>
                <span className="clickable">Save</span>
            </div>
        )
    }
}

export default RecentItem;