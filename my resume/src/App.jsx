import { useState } from 'react'
import './App.scss'
import About from './components/About/About'
import Div from './components/Div/Div'
import Porfolio from './components/Porfolio/Porfolio'

function App() {

  return (
    <>
    <div className='Apps_container'>
      <div>
         <About/>
      </div>
      <div>
      <Porfolio/>
      </div>
      <div>
        <Div/>
      </div>
    </div>
    </>
  )
}

export default App
