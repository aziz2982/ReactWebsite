import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar/index'
import { Utils } from '../Utils';

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path={'/'} element={<Navigate to={'/home'}/>} />
        {
          Utils.map((v)=>(
            <Route path={v.path} element={v.element} />
          ))
        }
      </Routes>
    </div>
  )
}

export default Root;