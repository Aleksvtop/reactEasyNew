import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion stories',
    component: Accordion,

} as ComponentMeta<typeof Accordion>;

export const callback = action('accordion mode changed')
export const CollapsedMenu = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UncollapsedUsers = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Menu'} collapsed={value} onChange={() => setValue(!value)}/>
}