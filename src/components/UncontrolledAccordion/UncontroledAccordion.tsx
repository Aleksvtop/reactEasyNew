import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string

}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


export const UncontrolledAccordion = (props: AccordionPropsType) => {
    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
    )
}


const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

