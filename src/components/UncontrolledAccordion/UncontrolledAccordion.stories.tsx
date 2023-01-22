import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledAccordion} from "./UncontroledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion,

} as ComponentMeta<typeof UncontrolledAccordion>;

export const ChangeMode = () => <UncontrolledAccordion titleValue={'Menu'} />



