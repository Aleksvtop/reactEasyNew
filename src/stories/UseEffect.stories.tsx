import React, {useEffect, useState} from 'react';

export default {
    title: "useEffect demo"
}

export const UseEffectStories = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('Simple Example')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return (
        <div>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake+1)}>fake +</button>
            <button onClick={() => setCounter(counter+1)}>counter +</button>
        </div>
    );
};

