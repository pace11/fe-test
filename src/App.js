<<<<<<< HEAD
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WrapperBody from './Styled-Body'
import routes from './routes'

export default function App() {
  // const [loading, setLoading] = React.useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading((loading) => !loading)
  //   }, 3000)
  // }, [])

  return (
    <WrapperBody>
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
    </WrapperBody>
  )
}
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 724f5459a52aee9234410131a30697894885f9ab
