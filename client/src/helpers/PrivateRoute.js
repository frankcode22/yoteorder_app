import React, { useContext } from 'react'
import { Route, useMatch , useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext)
  const match = useMatch (rest)
  const history = useNavigate()

  if (!isAuthenticated) {
    history.push('/login')
  }

  return (
    <Route
      {...rest}
      render={props => (
        isAuthenticated ? (
          <Component {...props} />
        ) : null
      )}
    />
  )
}

export default PrivateRoute
