import './Slider.scss'
import React from 'react'
import { CvContext } from '../CvContext'

export const Slider = () => {
    const { tools } = React.useContext(CvContext)

    return (
        <>
            <section className="Slider">
                <ul className="Slider--track">
                    {tools?.map(tool =>
                        <li 
                            key={tool.id}
                            className="Slider--item"
                        >
                            <img className="Slider--img" src={tool.icon} alt="" />
                            <p className="Slider--p">{tool.title}</p>
                        </li>
                    )}

                    {tools?.map(tool =>
                        <li 
                            key={tool.id}
                            className="Slider--item"
                        >
                            <img className="Slider--img" src={tool.icon} alt="" />
                            <p className="Slider--p">{tool.title}</p>
                        </li>
                    )}
                </ul>
            </section>
        </>
    )
}