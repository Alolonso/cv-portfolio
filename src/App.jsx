import './App.scss'
import React from 'react'
import { Title } from './components/Title'
import { ContactInformation } from './components/ContactInformation'
import { WorkExperience } from './components/WorkExperience'
import { Skills } from './components/Skills'
import { Studies } from './components/Studies'
import { Certificates } from './components/Certificates'
import { CvContext } from './components/CvContext'
import { Header } from './components/Header'

function App() {

  const {
    academic,
    courses,
    experience,
    languages,
    soft,
    technologies,
    tools,
    web,
    locate,
    setlocate
  } = React.useContext(CvContext)

  return (
    <>
      <Header/>
      
      <div className='App'>
        {locate == "home" &&
          <>
            <Title/>
            <ContactInformation/>
            <WorkExperience/>
            <Skills/>
            <Studies/>
          </>
        }

        {locate == "certificates" &&
          <Certificates/>
        }
      </div>
    </>
  )
}

export default App