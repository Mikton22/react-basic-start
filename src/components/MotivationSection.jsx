import {ways} from "../data.js";
import Motivation from "./Motivation.jsx";
import React from "react";

export default function MotivateSection() {
    return (
        <section>
            <h3>Особенности Hyundai Accent</h3>
            <ul>
                {ways.map((way) => (
                    <Motivation key={way.description} {...way} />
                ))}

                {/*<Motivation {...ways[0]} />*/}
                {/*<Motivation {...ways[1]} />*/}
                {/*<Motivation {...ways[2]} />*/}
                {/*<Motivation {...ways[3]} />*/}

            </ul>
        </ section>
    )
}
