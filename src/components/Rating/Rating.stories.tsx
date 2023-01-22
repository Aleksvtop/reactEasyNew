import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Rating, RatingValueType} from './Rating';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating stories',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyValue = () => <Rating value={0} onClick={x=>x}/>
export const Value1 = () => <Rating value={1} onClick={x=>x}/>
export const Value2 = () => <Rating value={2} onClick={x=>x}/>
export const Value3 = () => <Rating value={3} onClick={x=>x}/>
export const Value4 = () => <Rating value={4} onClick={x=>x}/>
export const Value5 = () => <Rating value={5} onClick={x=>x}/>

export const ChangeRating = () => {
    const [value, setValue] = useState<RatingValueType>(0)
    return <Rating value={value} onClick={(value) => setValue(value)}/>
}
