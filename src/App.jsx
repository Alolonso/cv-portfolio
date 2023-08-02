// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.scss'
import { Title } from './components/Title'
import { IndexContent } from './components/IndexContent'
import { ContactInformation } from './components/ContactInformation'
import { WorkExperience } from './components/WorkExperience'
import { Skills } from './components/Skills'
import { Studies } from './components/Studies'
import { Slider } from './components/Slider'


function App() {
  return (
    <>
      <div className='App'>
        <Title/>
        <IndexContent/>
        <ContactInformation/>
        <WorkExperience/>
        <Skills/>
        <Slider/>
        <Studies/>
      </div>
    </>
  )
}

export default App


