import './Projects.scss'
import React from 'react'
import { CvContext } from '../CvContext'

export const Projects = () => {
    const { projects } = React.useContext(CvContext)
    
    return (
        <section className='Projects'>
            <h2 className='Projects--title'>Projects</h2>

            <ul className='Projects--list'>
                
                {projects?.map(pro => 
                    <li 
                        key={pro.id}
                        className='Projects--item'
                    >
                        <div className='Projects--description'>
                            <figure>
                                <img className='Projects--image' src={pro.image} alt="" />
                            </figure>
                            <div className='Projects--info'>
                                <p className='Projects--text__title'>{pro.title}</p>
                                <p className='Projects--text'>{pro.description}</p>
                                <p className='Projects--text'>
                                    <a className='Projects--text__link' href={pro.link} target="_blank">App Web</a> & <a className='Projects--text__link' href={pro.repository} target="_blank">GitHub Repository</a>
                                </p>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    )
}