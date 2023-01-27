import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate } from 'react-router-dom'
import { selectIsLoggedIn, selectUserIsRefreshing } from 'redux/auth/authSelector'



export  const PrivateRoute = ({component: Component, redirectTo = "/"}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const isRefreshing = useSelector(selectUserIsRefreshing);

  const shouldRedirect = !isRefreshing && !isLoggedIn;
    return (
    <>
            {shouldRedirect ?  <Navigate to={redirectTo}/> : <Component/>  }
    </>
  )
}




