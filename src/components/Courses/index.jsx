import './Courses.scss'

export const Courses = () => {
    return (
        <section className='Courses'>
            <h2 className='Courses--title'>Courses</h2>

            <ul className='Courses--list'>
                <li className='Courses--item'>
                    <a className='Courses--link' href="https://platzi.com/p/Alolonso/curso/1814-basico-javascript/diploma/detalle/" target="_blank">
                        <figure>
                            <img className='Courses--image' src="https://i.imgur.com/TBAabF6.png" alt="" />
                        </figure>
                        <div className='Courses--description'>
                            <figure>
                                <img className='Courses--icon' src="https://i.imgur.com/dAKmMiD.png" alt="" />
                            </figure>
                            <p className='Courses--text'>Bachiller en educación media</p>
                        </div>
                    </a>
                </li>

                <li className='Courses--item'>
                    <figure>
                        <img className='Courses--image' src="https://i.imgur.com/qz9l4xy.jpg" alt="" />
                    </figure>
                    <div className='Courses--description'>
                        <figure>
                            <img className='Courses--icon' src="https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png" alt="" />
                        </figure>
                        <p className='Courses--text'>Curso Básico de JavaScript</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}