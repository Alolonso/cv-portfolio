import './Courses.scss'
import React from 'react'
import { CvContext } from '../CvContext'

export const Courses = () => {
    const { courses } = React.useContext(CvContext)
    
    return (
        <section className='Courses'>
            <h2 className='Courses--title'>Courses</h2>

            <ul className='Courses--list'>
                {courses?.map(cour => 
                    <li 
                        key={cour.id}
                        className='Courses--item'
                    >
                        
                        <figure>
                            <img className='Courses--image' src={cour.image} alt="" />
                        </figure>
                        <div className='Courses--description'>
                            <figure>
                                <img className='Courses--icon' src={cour.icon} alt="" />
                            </figure>
                            <div>
                                <p className='Courses--text__title'>{ cour.title }</p>
                                <p className='Courses--text'>{cour.academy}</p>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    )
}