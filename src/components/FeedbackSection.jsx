import Button from "./Button/Button.jsx";
import {useRef, useState} from "react";

function StateVsRef() {
    const input = useRef()
    const [show, setShow] = useState(false)

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            setShow(true)
            }
        }

        return (
        <div>
            <h3>Опишите причину обращения: {show && input.current.value}</h3>
            <input ref={input} type="text" className="control" onKeyDown={handleKeyDown} />
        </div>
    )
}

export default function FeedbackSection() {
    const [name, setName] = useState('Иван Иванов')
    const [reason, setReason] = useState('error')
    const [hasError, setHasError] = useState(false)

    function handleNameChange(event) {
        setName(event.target.value)
        setHasError(event.target.value.trim().length === 0)
    }

    function toggleError() {
        setHasError(!hasError)
    }

    return (
        <section>
            <h3>Написать нам: </h3>

            <Button onClick={toggleError}>ToggleError</Button>

            <form>
                <label htmlFor="name" >Ваше имя</label>
                <input type="text"
                        id='name'
                        className='control'
                        value={name}
                        style={ {border: name ? null : '1px solid red'} }
                        onChange={handleNameChange}
                />

                <label htmlFor="reason">Причина обращения</label>
                <select id="reason" className='control' value={reason} onChange={(event) => setReason(event.target.value)}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <pre>
                    Name: {name} <br/>
                    Reason: {reason}
                </pre>
                <StateVsRef />
                <Button disabled={ hasError } isActive={!hasError} >Отправить</Button>
            </form>
        </section>
    )
}
