import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,

} as ComponentMeta<typeof Select>;

export const WhithValue = () =>
    <>
        <Select value={'2'}
                onChange={action('Value changed')}
                items={[{value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'}]}/>
    </>
export const WithoutValue = () =>
    <>
        <Select onChange={action('Value changed')}
                items={[{value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'}]}/>
    </>

