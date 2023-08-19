import './Skills.scss'
import React from 'react'
import { CvContext } from '../CvContext'
import { Slider } from '../Slider'


export const Skills = () => {
    const { soft } = React.useContext(CvContext)
    const { technologies } = React.useContext(CvContext)
    const { languages } = React.useContext(CvContext)

    return (
        <>
            <section className='Skills'>
                <h2 className='Skills--title'>Skills</h2>

                <div className='Skills--container'>
                    <div className='Skills--card'>
                        <div>
                            <h3 className='Skills--subtitle'>Soft Skills</h3>
                            <ul className='Skills--list'>
                                {soft?.map(sof => 
                                    <li 
                                        key={sof}
                                        className='Skills--item'
                                    ><span>- </span> {sof} </li>
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className='Skills--card'>
                        <div>
                            <h3 className='Skills--subtitle'>Technologies</h3>
                            <ul className='Skills--list'>
                                {technologies?.map(tec => 
                                    <li 
                                        key={tec}
                                        className='Skills--item'
                                    ><span>- </span> {tec} </li>
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className='Skills--card'>
                        <div>
                            <h3 className='Skills--subtitle'>Languages</h3>
                            <ul className='Skills--list'>
                                {languages?.map(lan => 
                                    <li 
                                        key={lan}
                                        className='Skills--item'
                                    ><span>- </span> {lan} </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                    <Slider/>
            </section>
        </>
    )
}