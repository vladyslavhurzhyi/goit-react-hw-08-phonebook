import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsLoggedIn } from 'redux/auth/authSelector'

export const PublicRoute = ({component: Component, redirectTo = "/", restricted = false}) => {
  
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const shoudlRedirect = isLoggedIn && restricted;
  return (
  <>
    {shoudlRedirect ? <Navigate to={redirectTo}/>  : <Component/>}
  </>
      )
}



