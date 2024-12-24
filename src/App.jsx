import React from 'react'
import ProjectShow from './Pages/ProjectShow'
import { Route, Routes, ScrollRestoration } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AppLayout />}/>
        <Route path='/project-show/:id' element={<ProjectShow />} />
      </Routes>
    </div>
  )
}

export default App