/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const Emotion = () => {
  const containerStyle = css`
    color: purple;
    font-size: 18px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-block-end: 10px;
  `;
  return (
    <div css={containerStyle}>
      <p>- Emotion -</p>
      <button>fight!</button>
    </div>
  );
}