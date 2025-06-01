import { Link } from 'react-router-dom'

export const Page1Layout = () => {
  return (
    <div>
      <h1>Page1</h1>
      <Link to='/page1/detailA'>CssModules</Link>
      <br />
      <Link to='/page1/detailB'>DetailB</Link>
    </div>
  )
}