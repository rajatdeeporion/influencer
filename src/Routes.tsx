import React from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'

import About from './pages/About.tsx'
import Home from './pages/Home.tsx'
import Profile from './pages/home/Profile.tsx'

function Routes() {
    const router = createBrowserRouter([

        {path:'/',element:<Home/>},
        {path:'/about',element:<About/>},
        {path:'/profile',element:<Profile/>}
    ])
  return (
    <div>
       <RouterProvider  router={router}/>
    </div>
  )
}

export default Routes
