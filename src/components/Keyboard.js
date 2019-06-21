import React from 'react';
import Button from './Button';

class Keyboard extends React.Component {

    render() {
        return (
        <div className="keyboard">
            <div className="column-one">
                <Button details={{value: "1"}} />
                <Button details={{value: "4"}} />
                <Button details={{value: "7"}} />
                <Button details={{supClassList:"orange", value: "."}} />
                <Button details={{supClassList:"orange", value: "("}} />
            </div>
            <div className="column-two">
                <Button details={{value: "2"}} />
                <Button details={{value: "5"}} />
                <Button details={{value: "8"}} />
                <Button details={{value: "0"}} />
                <Button details={{supClassList:"orange", value: ")"}} />
            </div>
            <div className="column-three">
                <Button details={{value: "3"}} />
                <Button details={{value: "6"}} />
                <Button details={{value: "9"}} />
                <Button details={{supClassList:"orange", value: "="}} />
                <Button details={{supClassList:"orange material-icons", value: "backspace"}} />
            </div>
            <div className="column-three">
                <Button details={{supClassList:"orange", value: "+"}} />
                <Button details={{supClassList:"orange", value: "-"}} />
                <Button details={{supClassList:"orange", value: "/"}} />
                <Button details={{supClassList:"orange", value: "*"}} />
                <Button details={{supClassList:"orange", value: "C"}} />
            </div>
        </div>
        )
    }
}

export default Keyboard;