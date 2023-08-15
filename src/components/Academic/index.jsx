import './Academic.scss'
import React from 'react'
import { CvContext } from '../CvContext'

export const Academic = () => {
    const { academic } = React.useContext(CvContext)
    
    return (
        <section className='Academic'>
            <h2 className='Academic--title'>Academic</h2>

            <ul className='Academic--list'>
                {academic?.map(aca => 
                    <li 
                        key={aca.id}
                        className='Academic--item'
                    >
                        <figure>
                            <img className='Academic--image' src={aca.image} alt="" />
                        </figure>
                        <div className='Academic--description'>
                            <figure>
                                <img className='Academic--icon' src={aca.icon} alt="" />
                            </figure>
                            <div>
                                <p className='Academic--text__title'>{aca.title}</p>
                                <p className='Academic--text'>{aca.academy}</p>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    )
}