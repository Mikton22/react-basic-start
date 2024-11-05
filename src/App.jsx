import Header from './components/Header.jsx'
import React, { useState } from 'react';
import {ways, differences} from "./data.js";
import Motivation from './components/Motivation.jsx'
import Button from './components/Button/Button.jsx'

export default function App() {
    const [contentType, setContentType] = useState(null)

    // console.log('app component render')

    function handleClick(type) {
        setContentType(type)
        // console.log(setContentType)
    }

  return (
    <div>
        <Header />
        <main>
            <section>
                <h3>Learn React</h3>
                <ul>
                    <Motivation {...ways[0]} />
                    <Motivation {...ways[1]} />
                    <Motivation {...ways[2]} />
                </ul>
            </ section>
            <section>
                <Button onClick={()=>handleClick('way')}> Button 1 </Button>
                <Button onClick={()=>handleClick('easy')}> Button 2 </Button>
                <Button onClick={()=>handleClick('program')}> Button 3 </Button>

                {contentType ? (
                    <p>{differences[contentType]}</p>
                ) : ( null
                    // <p>Click the Button</p>
                )}

                { !contentType ? <p>Click the Button</p> : null }
            </section>
        </main>
    </div>
  )
}
