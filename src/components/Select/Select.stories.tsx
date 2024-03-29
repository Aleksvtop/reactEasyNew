import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,

} as ComponentMeta<typeof Select>;

export const WhithValue = () => {
    const [value, setValue] = useState('2')
    return <>
        <Select value={value}
                onChange={setValue}
                items={[{value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'}]}/>
    </>
}
export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>
        <Select onChange={setValue}
                value={value}
                items={[{value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'}]}/>
    </>
}
