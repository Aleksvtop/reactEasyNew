import React from 'react'

export type ItemType = {
    title: string,
    value: any
}

export type SelectPropsType = {
    value?: any,
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const selectedItem = props.items.find(i => i.value === props.value)
    return (
        <div>
            <span>{selectedItem && selectedItem.title}</span>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    )
}