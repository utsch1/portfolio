/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import css3 from './Logos/css3.png';
import html5 from './Logos/html5.png';
import javascript from './Logos/javascript.png';
import nextjs from './Logos/nextjs.png';
import nodejs from './Logos/nodejs.png';
import postgresql from './Logos/postgre.png';
import react from './Logos/react.png';
import typescript from './Logos/typescript.png';

const about = css`
  background-color: #ffd447;
  padding: 30px 100px;

  h1 {
    margin: 0;
    text-align: center;
  }

  h2 {
    margin: 10px;
    text-align: center;
  }
`;

const introduction = css`
  display: flex;

  img {
    border-radius: 50%;
    border: 2px solid black;
    margin: 20px 0;
  }

  div {
    margin: 20px 0 20px 40px;
  }

  div > :last-child {
    text-align: right;
  }
`;

const techStack = css`
  display: flex;
`;

const technologies = css`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  h3 {
    text-align: center;
    min-width: 100%;
  }

  div {
    color: #fff;
    padding: 7px;
    display: flex;
    margin: 2px;
    align-items: center;
    justify-content: center;
  }

  div > img {
    width: auto;
    height: 20px;
    margin-right: 10px;
  }
`;

export function About() {
  return (
    <div css={about}>
      <h1>About</h1>
      <div css={introduction}>
        <img
          src="UteGreiner.png"
          alt="Ute Greiner"
          width="200px"
          height="auto"
        />
        <div>
          <p>
            About a year ago, I decided to become a Web Developer and graduated
            at a Full Stack Web Development Bootcamp at Upleveled GmbH. The
            bootcamp is an immersive web development bootcamp, in which we
            learned the latest technologies and applied our knowledge in
            multiple projects. I am a passionate, creative and open minded
            person with a good sense for design, which I honed during my career
            in marketing. I want to combine web development with my marketing
            expertise and would like to further grow in that field as a web
            developer.
          </p>
          <p>CV Download</p>
        </div>
      </div>

      <h2>Tech Skills</h2>
      <div css={techStack}>
        <div css={technologies}>
          <h3>Technologies</h3>
          <div
            css={{
              backgroundColor: '#e34c26',
            }}
          >
            <img src={html5} alt="HTML5 Logo" />
            HTML5
          </div>
          <div
            css={{
              backgroundColor: '#264de4',
            }}
          >
            <img src={css3} alt="CSS3 Logo" />
            CSS3
          </div>
          <div
            css={{
              backgroundColor: '#323330',
            }}
          >
            <img src={javascript} alt="JavaScript Logo" />
            JAVASCRIPT
          </div>
          <div
            css={{
              backgroundColor: '#000',
            }}
          >
            <img src={typescript} alt="TypeScript Logo" />
            TYPESCRIPT
          </div>
          <div
            css={{
              backgroundColor: '#336791',
            }}
          >
            <img src={postgresql} alt="postgreSQL Logo" />
            POSTGRESQL
          </div>
          <div
            css={{
              backgroundColor: '#3c873a',
            }}
          >
            <img src={nodejs} alt="nodejs Logo" />
            NODE.JS
          </div>
          <div
            css={{
              backgroundColor: '#61DBFB',
            }}
          >
            <img src={react} alt="react Logo" />
            REACT
          </div>
          <div
            css={{
              backgroundColor: '#000',
            }}
          >
            <img src={nextjs} alt="nextjs Logo" />
            NEXT.JS
          </div>
        </div>
        <h3>Tools</h3>
        <ul>
          <li>Git, GitHub</li>
          <li>Testing (Jest, Playwright)</li>
          <li>Deployment (fly.io, Netlify)</li>
          <li>VS Code</li>
          <li>Typo3</li>
          <li>DrawSQL</li>
          <li>Figma</li>
          <li>Adobe InDesign</li>
          <li>Adobe PhotoShop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe AfterEffects</li>
        </ul>
      </div>
      <h2>My Passions</h2>
      <h3>Sports</h3>
      <img src="sport1.jpg" alt="Aerial Silk" width="100px" height="auto" />
      <h3>Traveling</h3>
      <img src="traveling1.jpg" alt="Traveling" width="100px" height="auto" />
      <h3>Cooking & Baking</h3>
      <img src="sport1.jpg" alt="Aerial Silk" width="100px" height="auto" />
      <h3>Plants</h3>
      <img src="sport1.jpg" alt="Aerial Silk" width="100px" height="auto" />
      <h3>Interior Design</h3>
      <img src="sport1.jpg" alt="Aerial Silk" width="100px" height="auto" />
    </div>
  );
}
