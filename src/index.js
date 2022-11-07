import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

import Header from "./components/header/header"
import SideBannerContainer from "./components/sideBanner/sideBanner"
import Dashboard from "./pages/Dashboard"

const rootElement = document.getElementById('root')
  if (rootElement != null){
    const root = createRoot(rootElement)
  root.render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/user/:userId" element={<Dashboard />}/>
      </Routes>
      <SideBannerContainer />
    </BrowserRouter>
  )
}
reportWebVitals()
