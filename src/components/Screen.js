import React from 'react';
import {isMobile} from 'react-device-detect';

class Screen extends React.Component {

    constructor(props) {
        super(props)
        this.mainInput = React.createRef();
    }

    componentDidUpdate() {
        if (!(this.props.display === "slide-out" && this.props.lastButton === "menu")) {
            this.mainInput.current.focus()
        }
    }
    
    render() {
        return (
        <div className="screen">
            <input type="text" ref={this.mainInput} autoFocus={true} value={this.props.currentCalc.join("")} onChange={this.props.handleChange} readOnly={isMobile ? true : false } />
        </div>
        )
    }
}

export default Screen;