import React from "react";

// export default function IntroSection() {
//     return(
//         <section>
//             <h1 className="centered">Hyundai Accent 2007 года</h1>
//             <h3 className="centered" style={{color: "#444"}}>это третье поколение модели,
//                 которая славится своей надежностью, простотой в обслуживании и экономичностью.
//                 Этот автомобиль, популярный в своем классе, был разработан как доступный вариант
//                 для тех, кто ищет практичный и недорогой автомобиль для повседневного использования
//             </h3>
//         </section>
//     )
// }

const e = React.createElement

export default function IntroSection() {
    return e(
        'section', null, [
        e('h1', {className: 'centered', key:1}, 'Hyundai Accent 2007 года'),
        e('h3', {className: 'centered', style:{color: "#555"}, key:2}, 'это третье поколение модели, ' +
            'которая славится своей надежностью, простотой в обслуживании и экономичностью. ' +
            'Этот автомобиль, популярный в своем классе, был разработан как доступный вариант для тех, ' +
            'кто ищет практичный и недорогой автомобиль для повседневного использования')
    ])
}
