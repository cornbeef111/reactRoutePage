import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import User from './components/User.jsx'
import Github, {dataFirstLoader} from './components/Github.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/' element={<User />}> 
         <Route path=':userid' element={<User />} />
      </Route>
      <Route path='github' element={<Github />} loader={dataFirstLoader} />
      <Route path='*' element={<div>Content no found </div>} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
