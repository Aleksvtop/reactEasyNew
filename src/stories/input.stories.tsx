import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <> <input onChange={changeValue}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const changeParentValue = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <><input value={parentValue} onChange={changeParentValue}/> parentValue: {parentValue}</>
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(false)
    const changeState = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={"checkbox"} checked={parentValue} onChange={changeState}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e:ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <>
            <select value={parentValue} onChange={onChange}>
                <option>none</option>
                <option value={'Minsk'}>Minsk</option>
                <option value={'Moscow'}>Moscow</option>
                <option value={'Kiev'}>Kiev</option>
            </select>
            <div>{parentValue}</div>
        </>
        )

}