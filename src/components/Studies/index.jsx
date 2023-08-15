import './Studies.scss'

export const Studies = () => {
    return (
        <section id='Studies' className="Studies">
            <h2 className="Studies--title">Studies</h2>

            <ul className="Studies--list">
                <li className="Studies--item">
                    <p className="Studies--p__bold">Colegio Agropecuario de San Carlos</p>
                    <p className="Studies--p">Bachiller en educación media - 2022</p>
                </li>

                <li>
                    <p className="Studies--p__bold">Colegio Agropecuario de San Carlos</p>
                    <p className="Studies--p">Técnico medio - Especialidad: Informática Desarrollo de Software - 2022</p>
                </li>
                
                <li>
                    <p className="Studies--p__bold">Online Education</p>
                    <p className="Studies--p">Platzi - Currently</p>
                </li>
            </ul>
        </section>
    )
}