import './Header.scss'
import React from 'react'

import { NavLink } from 'react-router-dom'

export const Header = () => {

    return (
        <>
            <header className="Header">
                <div className='Header--separator'>
                    <picture>
                        <img className='Header--image' src='https://alolonso.github.io/cv-database/src/icons/logo.svg' alt="" />
                    </picture>
                    <p className='Header--text'>José Alonso Díaz Ramírez</p>
                </div>

                <ul className='Header--list'>
                    <li className='Header--item'>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) => 
                                isPending ? "Header--link Header--link__pending" : isActive ? "Header--link Header--link__active" : "Header--link Header--link__inactive"
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className='Header--item'>
                        <NavLink
                            to="/certificates"
                            className={({ isActive, isPending }) => 
                                isPending ? "Header--link Header--link__pending" : isActive ? "Header--link Header--link__active" : "Header--link Header--link__inactive"
                            }
                        >
                            Certificates
                        </NavLink>
                    </li>

                    <li className='Header--item'>
                        <NavLink
                            to="/projects"
                            className={({ isActive, isPending }) => 
                                isPending ? "Header--link Header--link__pending" : isActive ? "Header--link Header--link__active" : "Header--link Header--link__inactive"
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </header>
        </>
    )
}