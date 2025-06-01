import { Link } from 'react-router-dom'

import './App.css'
import { Router } from './router/Router'

export default function App() {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/page1'>Page1</Link>
        <Link to='/page2'>Page2</Link>
      </nav>
      <Router />
    </>
  )
}
