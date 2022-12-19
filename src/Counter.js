import React from 'react';

// events
class Counter extends React.Component {

    constructor(props) {
        super(props);
        // create
        this.state = {
            count: props.count,
            xyz: 123
        }
    }

    shouldComponentUpdate() {
        return this.state.count < 15;
    }

    componentDidUpdate() {
        console.log('updated');
    }

    inc = () => {
        const current = this.state.count;
        this.setState({ count: current + 1 });
    }

    dec = () => {
        const current = this.state.count;
        this.setState({ count: current - 1 });
    }

    render() {
        return <div>
            <h1>Counter {this.state.count}</h1>

            <button onClick={this.inc}>++</button>
            <button onClick={this.dec}>--</button>
        </div>
    }
}

export default Counter;