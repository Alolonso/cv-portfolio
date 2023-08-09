import { Academic } from '../Academic'
import { Courses } from '../Courses'
import './Certificates.scss'

export const Certificates = () => {
    return (
        <section className='Certificates'>
            <h2 className='Certificates--title'>Certificates</h2>
            <div className="Certificates--container">
                <Academic/>
                <Courses/>
            </div>

            
        </section>
    )
}