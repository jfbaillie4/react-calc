import React from 'react';

class SavedItem extends React.Component {

    
    render() {
        return (
            <div className="tab-line">
                <span>{this.props.calc}</span>
                <span className="orange">Remove</span>
            </div>
        )
    }
}

export default SavedItem;