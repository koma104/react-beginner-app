import { InlineStyle } from '../components/InlineStyle'
import { CssModules } from '../components/CssModules'
import { StyledJsx } from '../components/StyledJsx'
import { StyledComponents } from '../components/StyledComponents'
import { Emotion } from '../components/Emotion'

export const Page1DetailA = () => {
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
    </div>
  )
}