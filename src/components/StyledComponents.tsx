import styled from 'styled-components'

const SContainer = styled.div`
  color: green;
  font-size: 18px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-block-end: 10px;
`

export const StyledComponents = () => {
  return (
    <SContainer>
      <p>- StyledComponents -</p>
      <button>fight!</button>
    </SContainer>
  )
}