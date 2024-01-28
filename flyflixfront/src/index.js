//import "./index.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './main_components/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ResultsContextProvider } from './context/ResultsContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResultsContextProvider>
        <Routes>
          <Route path="/*" element= {<App/>} />
        </Routes>
      </ResultsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);