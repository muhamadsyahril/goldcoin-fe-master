import React from "react"

// import { Switch, BrowserRouter as Router } from "react-router-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Routes all
import { userRoutes, authRoutes } from "./routes/allRoutes"

// Import all middleware
import Authmiddleware from "./routes/middleware/Authmiddleware"

// layouts Format
import UserLayout from "./components/UserLayout/"
import NonAuthLayout from "./components/NonAuthLayout.js"

// Import scss
import "./assets/scss/theme.scss"


const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {authRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={UserLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}

          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
          
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
