import GmailSVG from '/icons/gmail.svg'
import LinkedInSVG from '/icons/linkedin.svg'
import GitHubSVG from '/icons/github.svg'
import PlatziSVG from '/icons/platzi.svg'
import './Web.scss'

export const Web = () => {
    return (
        <section id='Web' className="Web">
            <h2 className="Web--title">Web</h2>
            <ul className='Web--list'>
                <li className="Web--card">
                    <img className="Web--icon" src="https://static.platzi.com/media/achievements/piezas-landing-introduccion-react-js_badge-5cb7b891-69d3-4de4-bdab-1641b4c30312.png" alt="" />
                    <div>
                        <p className="Web--text__course">Curso de React.js</p>
                        <p className="Web--text"> <span className='Web--text__bold'>Platzi </span>July 28, 2023</p>
                        <p className="Web--text"> <span className='Web--text__bold'>by </span>Juan David Castro Gallego</p>
                        <a className='Web--link' href="https://platzi.com/p/Alolonso/curso/7395-react/diploma/detalle/">Certification</a>
                    </div>
                </li>
                <li className="Web--card">
                    <img className="Web--icon" src="https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/piezas-sass-primera-landing-page_badge-bdf04f6c-97a1-4faf-b6b5-286d4f4fefb3.png" alt="" />
                    <div>
                        <p className="Web--text__course">Curso de Fundamentos de Sass: Crea tu Primera Landing Page</p>
                        <p className="Web--text"> <span className='Web--text__bold'>Platzi </span>July 30, 2023</p>
                        <p className="Web--text"> <span className='Web--text__bold'>by </span>Ana María Díaz Solorio</p>
                        <a className='Web--link' href="https://platzi.com/p/Alolonso/curso/6867-course/diploma/detalle/">Certification</a>
                    </div>
                </li>
                <li className="Web--card">
                    <img className="Web--icon" src="https://img-b.udemycdn.com/user/200_H/193154482_6d86.jpg" alt="" />
                    <div>
                        <p className="Web--text__course">MongoDB con Node.JS</p>
                        <p className="Web--text"> <span className='Web--text__bold'>Udemy </span>August 9, 2023</p>
                        <p className="Web--text"> <span className='Web--text__bold'>by </span>Centauro Solutions</p>
                        <a className='Web--link' href="https://www.udemy.com/certificate/UC-801e346e-c875-47c9-ba1d-f3f9caa1e51f/">Certification</a>
                    </div>
                </li>


            </ul>
        </section>
    )
}