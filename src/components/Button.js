import React from 'react';
import PropTypes from "prop-types";

class Button extends React.Component {

    static propTypes = {
        details: PropTypes.shape({
            supClassList: PropTypes.string, 
            value: PropTypes.string.isRequired,
        })};

    buttonPress = () => {
        this.props.buttonClick(this.props.details.value)
    }
    
    render() {
        const {supClassList, value} = this.props.details;
        return (
        <div className={supClassList ? `button ${supClassList}` : "button"} onClick={this.buttonPress} >
            <span>{value}</span>     
        </div>
        )
    }
}

export default Button;