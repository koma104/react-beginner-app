import { Link } from 'react-router-dom'

import './App.css'
import { Router } from './router/Router'
import { PrimaryButton } from './components/atoms/PrimaryButton'

export default function App() {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/page1'>Page1</Link>
        <Link to='/page2'>Page2</Link>
      </nav>
      <Router />
      <br />
      <PrimaryButton>Primary</PrimaryButton>
    </>
  )
}
