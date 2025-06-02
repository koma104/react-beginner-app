import { InlineStyle } from '../components/InlineStyle'
import { CssModules } from '../components/CssModules'
import { StyledJsx } from '../components/StyledJsx'
import { StyledComponents } from '../components/StyledComponents'
import { Emotion } from '../components/Emotion'
import { useNavigate } from 'react-router-dom'

export const Page1DetailA = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <h1>CssModules</h1>
      <div>
        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledComponents />
        <Emotion />
      </div>
      <br />
      <button onClick={onClickBack}>戻る</button>
    </div>
  )
}