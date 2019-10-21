import React from 'react';

class SavedItem extends React.Component {

    
    render() {
        return (
            <div className="tab-line">
                <span>{this.props.calc.equation}</span>
                {console.log(this.props.calc)}
                {console.log(this.props.index)}
                
                <span className="clickable" onClick={()=> this.props.removeSaved(this.props.calc, this.props.index)}>Remove</span>
            </div>
        )
    }
}

export default SavedItem;