import { Academic } from '../Academic'
import { Courses } from '../Courses'
import { Web } from '../Web'
import './Certificates.scss'

export const Certificates = () => {
    return (
        <section className='Certificates'>
            <h2 className='Certificates--title'>Certificates</h2>
            <div className="Certificates--container">
                <Academic/>
                <Courses/>
                <Web/>
            </div>

            
        </section>
    )
}