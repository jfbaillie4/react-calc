import React from 'react';

class RecentItem extends React.Component {


    render() {
        const item = this.props.calc
        
        return (
            <div className="tab-line">
                <span>{item}</span>
                <span className="clickable" onClick={() => this.props.toSaved(item)}>Save</span>
            </div>
        )
    }
}

export default RecentItem;