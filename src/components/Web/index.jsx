import './Web.scss'
import React from 'react'
import { CvContext } from '../CvContext'

export const Web = () => {
    const { web } = React.useContext(CvContext)
    return (
        <section id='Web' className="Web">
            <h2 className="Web--title">Web</h2>
            <ul className='Web--list'>
                {web?.map(we => 
                    <li 
                        key={we.id}
                        className="Web--card"
                    >
                        <img className="Web--icon" src={we.icon} alt="" />
                        <div>
                            <p className="Web--text__course">{we.title}</p>
                            <p className="Web--text"> <span className='Web--text__bold'>{we.academy} </span>{we.date}</p>
                            <p className="Web--text"> <span className='Web--text__bold'>by </span>{we.instructor}</p>
                            <a className='Web--link' href={we.link} target="_blank">Certification</a>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    )
}