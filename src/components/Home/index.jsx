import './Home.scss'
import React from 'react'

import { Title } from '../Title'
import { ContactInformation } from '../ContactInformation'
import { WorkExperience } from '../WorkExperience'
import { Skills } from '../Skills'
import { Studies } from '../Studies'

export const Home = () => {
    return (
        <>
            <section className='Home'>
                <Title/>
                <ContactInformation/>
                <WorkExperience/>
                <Skills/>
                <Studies/>
            </section>
        </>
    )
}