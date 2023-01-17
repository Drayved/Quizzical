import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// ReactDOM.render(<App />, document.getElementById("root"))

const domNode = document.getElementById("root")
const root = createRoot(domNode)
root.render(<App />)