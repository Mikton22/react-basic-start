import Header from './components/Header.jsx'
import {ways} from "./data.js";
import Motivation from './components/Motivation.jsx'
import Button from './components/Button/Button.jsx'

function handleClick() {
    console.log('button clicked')
}

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
                <Button onClick={handleClick}> Button 1 </Button>
                <Button onClick={handleClick}> Button 2 </Button>
                <Button onClick={handleClick}> Button 3 </Button>
            </section>
        </main>
    </div>
  )
}
