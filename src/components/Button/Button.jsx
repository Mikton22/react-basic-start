import './Button.css'

export default function Button({ children, onClick}) {
    return (
            <button className="button" onClick={onClick}
            // onMouseEnter={handleMouseEnter}
            // onDoubleClick={() => console.log('double click')}
                >{children} </button>
    )
}
