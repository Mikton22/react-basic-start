import Header from './components/Header/Header.jsx'
import React, { useState } from 'react';
import {ways, differences} from "./data.js";
import Button from './components/Button/Button.jsx'
import MotivateSection from "./components/MotivationSection.jsx";
import DifferencesSection from "./components/DifferencesSection.jsx";
// import { Fragment } from "react";
import IntroSection from './components/introSection.jsx'
import TabsSection from "./components/TabsSection.jsx";
import FeedbackSection from "./components/FeedbackSection";

export default function App() {

    // let tabContent = null
    // if (contentType) {
    //     tabContent = <p>{differences[contentType]}</p>
    // } else {
    //     tabContent = <p>Click the Button</p>
    // }

    const [tab, setTab] = useState('main')
  return (
    <>
        <Header />
        <main>
            <IntroSection />
            <TabsSection active={tab} onChange={ (current) => setTab(current) } />

            {tab==='main' && (
                <>
                    <MotivateSection />
                    <DifferencesSection />
                </>
            )}

            {tab==='feedback' && (
                <>
                    <FeedbackSection />
                </>
            )}
        </main>
    </>
  )
}
