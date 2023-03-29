import { BrowserRouter, useRoutes } from 'react-router-dom'
import React from "react"

// Pages and components
import Home from './pages/Home'
import Layout from './layouts/Layout'

import './css_global/main.scss'

function App() {
  var routes = []
  const home = <Home />
  routes = routes.concat(["/", "/home", "/index", "/index.html", "/index.js"].map(path => ({path, element: home})))
  console.log(routes)
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
