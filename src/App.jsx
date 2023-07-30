import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Title } from './components/Title'
import { IndexContent } from './components/IndexContent'
import { ContactInformation } from './components/ContactInformation'
import { WorkExperience } from './components/WorkExperience'
import { Skills } from './components/Skills'
import { Studies } from './components/Studies'

function App() {
  return (
    <>
      <Title/>
      <IndexContent/>
      <ContactInformation/>
      <WorkExperience/>
      <Skills/>
      <Studies/>

    </>
  )
}

export default App
