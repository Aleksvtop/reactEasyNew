import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion stories',
    component: Accordion,

} as ComponentMeta<typeof Accordion>;

const callback = action('accordion mode changed')
const onClickCallBack = action('some item was clicked')
export const CollapsedMenu = () => <Accordion titleValue={'Users'} collapsed={true} onChange={callback} onClick={onClickCallBack} items={[]} />
export const UncollapsedUsers = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback} onClick={onClickCallBack} items={[{title:'Aleks', value: 1}, {title:'Dimych', value: 2}, {title:'Victor', value: 3}, {title: 'Valera', value: 4}]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)} onClick={(title) => alert(`${title} was clicked`)} items={[{title:'Aleks', value: 1}, {title:'Dimych', value: 2}, {title:'Victor', value: 3}, {title: 'Valera', value: 4}]}/>
}