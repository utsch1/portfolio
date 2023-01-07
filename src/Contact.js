/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import email from './Logos/email.png';
import github from './Logos/github.png';
import linkedin from './Logos/linkedin.png';

const contact = css`
  background-color: #700353;
  color: #fff;
  padding: 30px 100px;
  text-align: center;

  h1 {
    margin: 0 0 30px 0;
  }

  a > img {
    width: 30px;
    height: auto;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  a > img:nth-child(1) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const credits = css`
  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export function Contact() {
  return (
    <div css={contact}>
      <h1>Contact</h1>
      <p>
        Did you get interested in me? Please find below possibilities to contact
        me.
      </p>
      <a href="https://www.linkedin.com/in/ute-greiner/">
        <img src={linkedin} alt="Linkedin Logo" />
      </a>
      <a href="https://github.com/utsch1">
        <img src={github} alt="GitHub Logo" />
      </a>
      <a href="mailto:utegreiner@gmx.com">
        <img src={email} alt="Email Icon" />
      </a>
      <div css={credits}>
        <a href="/credits">Credits</a>
      </div>
    </div>
  );
}
