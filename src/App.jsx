import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home/home'
import About from'./component/About/About'
import Port from './component/portfolio/port'
import Contact from'./component/contact/contact'
import Layout from './component/layout/layout'
import {createBrowserRouter, RouterProvider} from'react-router-dom'

let x=createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portfolio",element:<Port/>},
    {path:"contact",element:<Contact/>},
  ]}
])

function App() {
  return <RouterProvider router={x}></RouterProvider>
}

export default App
