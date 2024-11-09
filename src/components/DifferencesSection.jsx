import Button from "./Button/Button.jsx";
import React, {useState} from "react";
import {differences} from "../data.js";

export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null)

    // console.log('app component render')
    function handleClick(type) {
        setContentType(type)
        // console.log(setContentType)
    }
return(
    <section>
        <Button isActive={contentType==='way'} onClick={()=>handleClick('way')}> Дизайн </Button>
        <Button isActive={contentType==='easy'} onClick={()=>handleClick('easy')}> Двигатель и экономичность </Button>
        <Button isActive={contentType==='program'} onClick={()=>handleClick('program')}> Комфорт и интерьер </Button>

        {/*{contentType ? (*/}
        {/*    <p>{differences[contentType]}</p>*/}
        {/*) : ( null)}*/}

        {/*{ !contentType ? <p>Click the Button</p> : null }*/}
        {/*{ contentType ? <p>{differences[contentType]}</p> : null }*/}

        {!contentType && <p>Click the Button</p>}
        {contentType && <p>{differences[contentType]}</p>}

        {/*{tabContent}*/}
    </section>
    )
}
