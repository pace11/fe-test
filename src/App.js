import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WrapperBody from './Styled-Body'
import SplashScreen from './splash-screen'
import routes from './routes'

export default function App() {
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading((loading) => !loading)
    }, 3000)
  }, [])

  return (
    <WrapperBody>
      {loading ? (
        <SplashScreen />
      ) : (
        <Router>
          {routes.map((route, idx) => (
            <Route
              key={String(idx)}
              path={route.path}
              exact={route.exact}
              component={(props) => (
                <route.layout {...props}>
                  {route && route.isLoggedIn ? (
                    <route.redirectComponent {...props} />
                  ) : (
                    <route.component {...props} />
                  )}
                </route.layout>
              )}
            />
          ))}
        </Router>
      )}
    </WrapperBody>
  )
}
