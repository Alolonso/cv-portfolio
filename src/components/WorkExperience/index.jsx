import './WorkExperience.scss'
import React from 'react'
import { CvContext } from '../CvContext'

export const WorkExperience = () => {
    const { experience } = React.useContext(CvContext)
    return (
        <section id='WorkExperience' className='WorkExperience'>
            <h2 className='WorkExperience--title'>Work Experience</h2>
            <ul className='WorkExperience--list'>

                {experience?.map(expe => 
                    <li 
                        key={expe.id}
                        className='WorkExperience--item'
                    >
                        <p className='WorkExperience--text__bold'>{expe.title}</p>
                        <p className='WorkExperience--text'>{expe.position}</p>

                        {expe.jobs.map(job => 
                            <p 
                                key={job}
                                className='WorkExperience--text'
                            ><span>- </span>{job}</p>
                        )}
                    </li>
                )}
            </ul>
        </section>
    )
}