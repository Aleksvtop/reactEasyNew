import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;

export const OnOffMode = () => <UncontrolledOnOff onChange={x=>x}/>



