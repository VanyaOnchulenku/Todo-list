import { useState } from 'react'
import { useEffect } from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import axios from 'axios'
import Home from './Home'
import Pets from './Pets'
import Add from './Add'
import Update from './Update'
import Delete from './Delete'


function App() {

  return (
    <div className ='App'>
      <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/pets' element = {<Pets/>}/>
          <Route path = '/add' element = {<Add/>} />
          <Route path = '/update/:id' element = {<Update/>} />
      </Routes>
    </div>
      
  )
}

export default App
