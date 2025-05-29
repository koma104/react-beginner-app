const style = {
  width: '100%',
  height: '100%',
  backgroundColor: 'khaki',
}

const styleText = {
  color: '#000',
}


export const ChildArea = (props: { open: boolean }) => {
  const { open } = props;

  return (
    <>
      {open ? (
        <div style={style}>
          <p style={styleText}>ChildArea</p>
        </div>
      ) : null}
    </>
  )
}