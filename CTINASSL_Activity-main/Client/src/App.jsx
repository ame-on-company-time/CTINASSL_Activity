import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import home from './components/pages/home';
import about from './components/pages/about';
import header from './components/navbar/header';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<home/>}/>
          <Route path="/" element={<about/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App