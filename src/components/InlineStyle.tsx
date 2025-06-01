export const InlineStyle = () => {
  const style = {
    color: 'red',
    fontSize: '18px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
    marginBlockEnd: '10px',
  }

  return (
    <div style={style}>
      <p>- InlineStyle -</p>
      <button>fight!</button>
    </div>
  )
}