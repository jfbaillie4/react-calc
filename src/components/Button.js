import React from 'react';
import PropTypes from "prop-types";

class Button extends React.Component {

    static propTypes = {
        details: PropTypes.shape({
            color: PropTypes.string, 
            value: PropTypes.string.isRequired,
        })};
    
    render() {
        const {color, value} = this.props.details;
        return (
        <div className={color ? `button ${color}` : "button"}>
            <span>{value}</span>     
        </div>
        )
    }
}

export default Button;