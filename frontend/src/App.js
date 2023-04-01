import { BrowserRouter, useRoutes } from 'react-router-dom'
import React from "react"

// Pages and components
import Layout from './layouts/Layout'
import Home from './pages/Home'
import OrderAhead from './pages/OrderAhead'

import './css_global/main.scss'

const App = () => {
  var routes = []
  // Home
  const home = <Home />
  routes = routes.concat(["/", "/home", "/index", "/index.html"].map(path => ({path, element: home})))

  // OrderAhead
  routes = routes.concat({path: 'order_ahead', element: <OrderAhead />})

  if (process.env.NODE_ENV === "development") {
    console.log("Development mode!")
    console.log(routes)
  }
  return useRoutes(routes)
}

function AppWrapper() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default AppWrapper
