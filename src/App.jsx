import Header from './components/Header.jsx'
import {ways} from "./data.js";
import Motivation from './components/Motivation.jsx'

export default function App() {
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
            </section>
        </main>
    </div>
  )
}
