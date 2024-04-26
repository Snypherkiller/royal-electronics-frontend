import React  from "react";

class CounterClass extends React.Component {

    constructor(){
        super();
        this.incriment = this.incriment.bind(this)
        this.state = {
            number : 0
        }
    }

    incriment(){
        this.setState({
            number: ++this.state.number
        })
    }

    render(){
        return(
            <div>

                <h1>Counter = {this.state.number}</h1>
                <button onClick={this.incriment}>Incriment</button>
            </div>
        )
    }
}

export default CounterClass;