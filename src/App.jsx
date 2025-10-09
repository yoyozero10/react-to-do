import './components/todo/todo.css'
import TodoDesc from './components/todo/TodoDesc'
import TodoInput from './components/todo/TodoInput'
import ReactLogo from './assets/react.svg'
import React from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'

const App = () => {



  return (
    <>
      <Header></Header>

      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
