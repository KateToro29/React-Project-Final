//import { useState } from 'react'
import Api from './Api/Api'
import './App.css'

import Navbar from './components/Nav/Nav'
import Targets from './components/Targets/Targets'
//import Targets from './components/Targets/Targets'
import Title from './components/Title/Title'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Title>{Title.Favorites}</Title>
      <div className='ContainerPrincipalCards'>
        <Title>{Title.Favorites}</Title>
        <div>
          <Api></Api>
        </div>
        
        
      </div>
    </>
  )
}

export default App
