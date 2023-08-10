import './ContactInformation.scss'

export const ContactInformation = () => {
    return (
        <section id='Contact' className="Contact">
            <h2 className="Contact--title">Contact information</h2>

            <ul className='Contact--list'>
                <li className="Contact--card">
                    <img className="Contact--icon" src="https://alolonso.github.io/cv-database/src/icons/gmail.svg" alt="" />
                    <p className="Contact--p">
                        <span className='Contact--p__bold'>Gmail:</span> joseloso1181mana04@gmail.com
                    </p>
                </li>

                <li className="Contact--card">
                    <img className="Contact--icon" src="https://alolonso.github.io/cv-database/src/icons/linkedin.svg" alt="" />
                    <p className="Contact--p">
                        <span className='Contact--p__bold'>LinkedIn: </span>
                        <a className="Contact--a" href="https://www.linkedin.com/in/jos%C3%A9-alonso-d%C3%ADaz-ram%C3%ADrez-678ba8285" target="_blank">
                            José Alonso Díaz Ramírez
                        </a>
                    </p>
                </li>

                <li className="Contact--card">
                    <img className="Contact--icon" src="https://alolonso.github.io/cv-database/src/icons/github.svg" alt="" />
                    <p className="Contact--p">
                        <span className='Contact--p__bold'>GitHub: </span>
                        <a className="Contact--a" href="https://github.com/Alolonso" target="_blank">
                            Alolonso
                        </a>
                    </p>
                </li>

                <li className="Contact--card">
                    <img className="Contact--icon" src="https://alolonso.github.io/cv-database/src/icons/platzi.svg" alt="" />
                    <p className="Contact--p">
                        <span className='Contact--p__bold'>Platzi: </span>
                        <a className="Contact--a" href="https://platzi.com/p/Alolonso/" target="_blank">
                            José Alonso Díaz Ramírez
                        </a>
                    </p>
                </li>
            </ul>
        </section>
    )
}