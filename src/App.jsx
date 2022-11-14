import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/home/Dashboard'
import Login from './pages/authentication/Login'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}
