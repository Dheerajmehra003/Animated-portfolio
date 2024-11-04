import React from 'react'
import Page01 from './Pages/Page01'
import { Header } from './Components/Header'
import Page02 from './Pages/Page02'
import Page03 from './Pages/Page03'
import Page04 from './Pages/Page04'

const App = () => {
  return (
    <div>
      <Header />
      <Page01 />
      <Page02 />
      <Page03 />
      <Page04 />
    </div>
  )
}

export default App