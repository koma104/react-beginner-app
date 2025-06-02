import { Link, useNavigate } from 'react-router-dom'

export const Page1Layout = () => {
  const navigate = useNavigate();

  const onClickLink = () => {
    navigate('/page1/detailA');
  }

  return (
    <div>
      <h1>Page1</h1>
      <Link to='/page1/detailA'>CssModules</Link>
      <br />
      <br />
      <Link to='/page1/detailB'>DetailB</Link>
      <br />
      <br />
      <button onClick={onClickLink}>CssModules</button>
    </div>
  )
}