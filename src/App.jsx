
import React from 'react'

import './App.css'

import Hero from './Components/Hero'
import Presentation from './Components/Presentation'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Video from './Components/Video'
import Time from './Components/Time'
import BombArea from './Components/BombArea'
import Blog from './Components/Blog'
import Footer from './Components/Footer'



function App() {


  return (
    <>
    <Navbar/>
    <Hero/>
    <Presentation/>
    <Slider/>
    <Video/>
    <Time/>
    <BombArea/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App
