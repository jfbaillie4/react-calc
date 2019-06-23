import React from 'react';
import Button from './Button';

class Keyboard extends React.Component {

    render() {
        return (
        <div className="keyboard">
            <div className="column-one">
                <Button buttonClick={this.props.buttonClick} details={{value: "1"}} />
                <Button buttonClick={this.props.buttonClick} details={{value: "4"}} />
                <Button buttonClick={this.props.buttonClick} details={{value: "7"}} />
                <Button buttonClick={this.props.buttonClick} details={{supClassList:"orange", value: "."}} />
                <Button buttonClick={this.props.buttonClick} details={{supClassList:"orange", value: "("}} />
            </div>
            <div className="column-two">
                <Button buttonClick={this.props.buttonClick} details={{value: "2"}} />
                <Button buttonClick={this.props.buttonClick} details={{value: "5"}} />
                <Button buttonClick={this.props.buttonClick} details={{value: "8"}} />
                <Button buttonClick={this.props.buttonClick} details={{value: "0"}} />
                <Button buttonClick={this.props.buttonClick} details={{supClassList:"orange", value: ")"}} />
            </div>
            <div className="column-three">
                <Button buttonClick={this.props.buttonClick} details={{value: "3"}} />
                <Button buttonClick={this.props.buttonClick} details={{value: "6"}} />
                <Button buttonClick={this.props.buttonClick} details={{value: "9"}} />
                <Button buttonClick={this.props.buttonClick} details={{supClassList:"orange", value: "="}} />
                <Button buttonClick={this.props.buttonClick} details={{supClassList:"orange material-icons", value: "backspace"}} />
            </div>
            <div className="column-three">
                <Button buttonClick={this.props.buttonClick} details={{supClassList:"orange", value: "+"}} />
                <Button buttonClick={this.props.buttonClick} details={{supClassList:"orange", value: "-"}} />
                <Button buttonClick={this.props.buttonClick} details={{supClassList:"orange", value: "/"}} />
                <Button buttonClick={this.props.buttonClick} details={{supClassList:"orange", value: "*"}} />
                <Button buttonClick={this.props.buttonClick} details={{supClassList:"orange", value: "C"}} />
            </div>
        </div>
        )
    }
}

export default Keyboard;