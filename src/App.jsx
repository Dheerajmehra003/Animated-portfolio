import React from 'react'
import Page01 from './Pages/Page01'
import { Header } from './Components/Header'
import Page02 from './Pages/Page02'

const App = () => {
  return (
    <div>
      <Header />
      <Page01 />
      <Page02 />
    </div>
  )
}

export default App