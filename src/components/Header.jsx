import logo from '/logo-name.svg'

export default function Header() {
    const now = new Date()
    const name = 'logo'

    return(
        <header>
            <img src={logo} alt="{name}"/>
            {/*<h3>Заголовок</h3>*/}

            <span>Текущее время: {now.toLocaleString()}</span>
        </header>
    )
}
