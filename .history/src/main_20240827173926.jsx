import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import index from './Home'
import index from './Produtos'
import index from './Ofertas'
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
<Route path = '/Home' element = {<index/>}/>
<Route path = '/Produtos' element = {<index/>}/>
<Route path = '/Ofertas' element = {<index/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



