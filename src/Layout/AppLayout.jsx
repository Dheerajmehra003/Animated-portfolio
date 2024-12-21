import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Components/Header'
import Page01 from '../Pages/Page01'
import Page02 from '../Pages/Page02'
import Page03 from '../Pages/Page03'
import Page04 from '../Pages/Page04'

const AppLayout = () => {
  return (
    <div>
       <Header/>
       <Page01 />
       <Page02 />
       <Page03 />
       <Page04 id={"contact"} />
    </div>
  )
}

export default AppLayout