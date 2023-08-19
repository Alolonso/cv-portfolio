import './App.scss'
import React from 'react'
import { Certificates } from './components/Certificates'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Loading } from './components/Loading'
import { Error } from './components/Error'
import { CvContext } from './components/CvContext'

import { Route, Routes } from 'react-router'

function App() {

  const { loading, error } = React.useContext(CvContext)

  return (
    <>
      <Header/>

      <div className='App'>
        {loading && <Loading/>}
        {error && <Error text={error}/>}

        {(!loading && !error) && 
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/certificates' element={<Certificates/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='*' element={<Error text="Not found"/>} />
          </Routes>
        }
      </div>
    </>
  )
}

export default App