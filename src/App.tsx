import { Link } from 'react-router-dom'

import { Router } from './router/Router'
import { SearchInput } from './components/molecules/SearchInput'
import { GlobalStyle } from './GlobalStyle'
import { Navigation } from './components/Navigation'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Router />
      <br />
      <SearchInput />
    </>
  )
}
