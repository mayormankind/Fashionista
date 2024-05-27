import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import ErrorPage from './pages/ErrorPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
