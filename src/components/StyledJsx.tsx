// 注意: <style jsx> の記法はNext.js専用です。
// 通常のReact（Vite, CRAなど）ではエラーになります。
// 通常のReactではCSS ModulesやEmotionなどを使用してください。

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