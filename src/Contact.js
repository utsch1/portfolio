/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const contact = css`
  background-color: #700353;
  color: #fff;
  padding: 30px 100px;

  > h1 {
    margin: 0;
    text-align: center;
  }
`;

export function Contact() {
  return (
    <div css={contact}>
      <h1>Contact</h1>
      <p>LinkedIn</p>
      <p>GitHub</p>
      <p>Email</p>
      <p>Icons</p>
    </div>
  );
}
