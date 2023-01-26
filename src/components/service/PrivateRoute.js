import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate } from 'react-router-dom'
import { selectIsLoggedIn } from 'redux/auth/authSelector'



export  const PrivateRoute = ({component: Component, redirectTo = "/"}) => {
const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
    <>
            {isLoggedIn ? <Component/> : <Navigate to={redirectTo}/>  }
    </>
  )
}




