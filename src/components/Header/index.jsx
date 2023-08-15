import './Header.scss'
import React from 'react'
import HamburSVG from '../../assets/hamburger.svg'
import { CvContext } from '../CvContext'


export const Header = () => {

    const {
        locate,
        setlocate
    } = React.useContext(CvContext)

    return (
        <>
            <header className="Header">
                <nav className='Header--navigator'>
                    <div className='Header--separator'>
                        <picture>
                            <img className='Header--image' src={HamburSVG} alt="" />
                        </picture>
                        <p className='Header--text'>José Alonso Díaz Ramírez</p>
                    </div>

                    <div className='Header--separator'>
                        <button 
                            className={`Header--button ${locate == "home" && "Header--button__selected"}`}
                            onClick={
                                () => {setlocate("home")}
                            }
                        >Home</button>
                        
                        <button 
                            className={`Header--button ${locate == "certificates" && "Header--button__selected"}`}
                            onClick={
                                () => {setlocate("certificates")}
                            }
                        >Certificates</button>

                        <button 
                            className={`Header--button ${locate == "projects" && "Header--button__selected"}`}
                            onClick={
                                () => {setlocate("projects")}
                            }
                        >Projects</button>
                    </div>
                </nav>
            </header>
        </>
    )
}