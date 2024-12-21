import React from 'react'
import ProjectShow from './Pages/ProjectShow'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import Page04 from './Pages/Page04'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AppLayout />}/>
        <Route path='/project-show' element={<ProjectShow />} />
        {/* <Route path='/contact' element={<Page04 />} /> */}
      </Routes>
    </div>
  )
}

export default App