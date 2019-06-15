import React from 'react';

class WelcomePage extends React.Component {
    
    constructor(props) {
        super(props);
        this.input = React.createRef();
      }   
    
    goToCalc = event => {
        event.preventDefault();
        const storeName = this.input.current.value;
        this.props.history.push(`/calc/${storeName}`);
    };

    render() {
        return (
        <form className="calc-selector" onSubmit={this.goToCalc}>
            <h2>Calculator Name</h2>
            <input 
                type="text" 
                ref={this.input}
                required 
                placeholder="Calculator Name"
                 />
            <button type="submit">Go</button>
        </form>
        )
    }
}

export default WelcomePage;
