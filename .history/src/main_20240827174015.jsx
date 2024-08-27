import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Produtos from './Produtos'
import Ofertas from './Ofertas'
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
<Route path = '/' element = {<Home/>}/>
<Route path = '/Produtos' element = {<Produtos/>}/>
<Route path = '/Ofertas' element = {<Ofertas/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



