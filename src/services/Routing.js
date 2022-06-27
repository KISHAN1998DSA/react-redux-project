import React from 'react'
import { Route,Routes } from 'react-router-dom'
import CardDetail from '../components/CardDetail'
import ErrorPage from '../components/ErrorPage'
import Home from '../components/Home'
const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cardDetail/:id' element={<CardDetail/>}/>
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    </>
  )
}

export default Routing