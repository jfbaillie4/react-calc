import React from 'react';

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
            <input type="text" ref={this.mainInput} autoFocus={true} value={this.props.currentCalc.join("")} onChange={this.props.handleChange} />
        </div>
        )
    }
}

export default Screen;