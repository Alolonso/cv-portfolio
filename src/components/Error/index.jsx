import './Error.scss'
import React from 'react'

export const Error = ( props ) => {
    
    return (
        <section className='Error'>
            <h2 className='Error--title'>Error :</h2>
            <p className='Error--text'>{ props.text }</p>
        </section>
    )
}