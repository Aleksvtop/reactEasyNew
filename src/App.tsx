import React, { useState } from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff'
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontroledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";



function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState(false)
  let [switchOn, setSwitchOn] = useState(false)
  return (
      <div className={'App'}>
        <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
        <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
        <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
        {/*<Accordion titleValue={"Users"}
                   collapsed={accordionCollapsed}
                   onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}
        />*/}
        <UncontrolledAccordion titleValue={'Menu'}/>
        <UncontrolledRating/>
        <Rating value={ratingValue} onClick={setRatingValue}/>
        <OnOff on={switchOn} onChange={setSwitchOn}/>
      </div>
  );
}

/*type TitlePropsType = {
    title: string;
}
function Title(props: TitlePropsType) {
    console.log("Title rendering")
    return (
        <div>{props.title}</div>
    )
}*/


export default App;
