export const StyledJsx = () => {
  return (
    <>
      <div className='container'>
        <p>- StyledJsx -</p>
        <button>fight!</button>
      </div>

      <style jsx>{`
      .container {
        color: blue;
        font-size: 18px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        margin-block-end: 10px;
      }
    `}</style>
    </>
  )
}