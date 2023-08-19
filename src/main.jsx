import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { CvProvider } from './components/CvContext'
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <CvProvider>
        <App/>
      </CvProvider>
    </HashRouter>
  </React.StrictMode>,
)