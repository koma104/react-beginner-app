import { Link } from 'react-router-dom'

import { Router } from './router/Router'
import { SearchInput } from './components/molecules/SearchInput'
import { GlobalStyle } from './GlobalStyle'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/page1'>Page1</Link>
        <Link to='/page2'>Page2</Link>
      </nav>
      <Router />
      <br />
      <SearchInput />
    </>
  )
}
