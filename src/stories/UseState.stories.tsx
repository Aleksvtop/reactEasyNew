import React, {useState} from 'react';

export default {
    title: 'useState demo'
}

function geterateData() {
    console.log('generateData')
    return 1
}

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(geterateData)
    const changer = (state: number) => {
        return state + 1
    }

    return (
        <div>
            <button onClick={() => setCounter(changer)}>+</button>
            <div>{counter}</div>
        </div>
    );
};

