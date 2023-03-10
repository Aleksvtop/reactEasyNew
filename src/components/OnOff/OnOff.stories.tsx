import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from "./OnOff";



export default {
    title: 'OnOff stories',
    component: OnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        style: { control: 'color' },
    },
} as ComponentMeta<typeof OnOff>;

export const OnMode = () => <OnOff on={true} onChange={x => x} />
export const OffMode = () => <OnOff on={false} onChange={x => x} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setValue} />
}

