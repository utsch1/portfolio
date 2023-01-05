/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const about = css`
  background-color: #ffd447;
  padding: 30px 100px;

  h1 {
    margin: 0;
    text-align: center;
  }

  h2 {
    margin: 0;
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
      <h3>Technologies</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <ul>
          <li>Emotion</li>
          <li>Tailwind CSS</li>
          <li>Material UI</li>
        </ul>
        <li>JavaScript (ES6)</li>
        <li>TypeScript</li>
        <li>Databases (PostgreSQL)</li>
        <li>Database Migrations</li>
        <li>REST API</li>
        <li>Node.js</li>
        <li>React</li>
        <li>Next.js</li>
      </ul>
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
