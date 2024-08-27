import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Ofertas from './Ofertas'
import Produtos from './Produtos'
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
<Route path = '/' element = {<Home/>}/>
<Route path = '/Ofertas' element = {<Ofertas/>}/>
<Route path = '/Produtos' element = {<Produtos/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



