import React from 'react';

class RecentItem extends React.Component {


    render() {
        const item = this.props.calc
        
        if (item.saved === false) {
            return (
                <div className="tab-line">
                    <span>{item.equation}</span>
                    <span className="clickable" onClick={() => this.props.toSaved(item, this.props.index)}>Save</span>
                </div>
            )
        }
        return (
            <div className="tab-line">
                <span>{item.equation}</span>
                <span>Saved</span>
            </div>
        )
    }
}

export default RecentItem;