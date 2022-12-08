// function or class
// return UI or null
// component can take properties
// class components may have state
// internal
// props
import Name from './Name';
import Counter from './Counter';

const App = () => {
    return <div>
        <Counter count={0} />
        <Counter count={10} />
        <Name val="John" />
        <Name val="Joseph" />
        <h1>Hello React!!</h1>
    </div>
};

export default App;
