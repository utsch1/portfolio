/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import afterEffects from './Logos/aftereffects.png';
import cloudinary from './Logos/cloudinary.png';
import css3 from './Logos/css3.png';
import migrations from './Logos/datamigrations.png';
import drawsql from './Logos/drawsql.png';
import figma from './Logos/figma.png';
import flyio from './Logos/flyio.svg';
import git from './Logos/git.png';
import github from './Logos/github.png';
import html5 from './Logos/html5.png';
import illustrator from './Logos/illustrator.png';
import indesign from './Logos/indesign.png';
import javascript from './Logos/javascript.png';
import jest from './Logos/jest.png';
import netlify from './Logos/netlify.png';
import nextjs from './Logos/nextjs.png';
import nodejs from './Logos/nodejs.png';
import npm from './Logos/npm.png';
import photoshop from './Logos/photoshop.png';
import playwright from './Logos/playwright.png';
import postgresql from './Logos/postgre.png';
import react from './Logos/react.png';
import restapi from './Logos/restapi.png';
import typescript from './Logos/typescript.png';
import typo3 from './Logos/typo3.png';
import vscode from './Logos/vscode.png';

const about = css`
  background-color: #ffd447;
  padding: 30px 100px;

  h1 {
    margin: 0;
    text-align: center;
  }

  h2 {
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
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

const technologies = css`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 14px;

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
    margin-right: 7px;
  }
`;

const passions = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div > div {
    width: 150px;
    height: 150px;
    display: inline-block;
    border-radius: 50%;
    border: 2px solid black;
    overflow: hidden;
  }

  div > div > img {
    justify-self: center;
    align-self: center;
    flex-shrink: 0;
    width: 150px;
    height: auto;
  }
`;

export function About() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('UteGreiner_CV.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'UteGreiner_CV.pdf';
        alink.click();
      });
    });
  };
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
          <button onClick={onButtonClick}>CV Download</button>
        </div>
      </div>

      <h2>Tech Stack</h2>
      <div css={technologies}>
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
            backgroundColor: '#00273F',
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
            backgroundColor: '#292929',
          }}
        >
          <img src={migrations} alt="Database Migration Icon" />
          DATABASE MIGRATIONS
        </div>
        <div
          css={{
            backgroundColor: '#000',
          }}
        >
          <img src={restapi} alt="REST API icon" />
          REST API
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
        <div
          css={{
            backgroundColor: '#3448c5',
          }}
        >
          <img src={cloudinary} alt="cloudinary Logo" />
          CLOUDINARY
        </div>
        <div
          css={{
            backgroundColor: '#F1502F',
          }}
        >
          <img src={git} alt="Git Logo" />
          GIT
        </div>
        <div
          css={{
            backgroundColor: '#6e5494',
          }}
        >
          <img src={github} alt="Github Logo" />
          GITHUB
        </div>
        <div
          css={{
            backgroundColor: '#000',
          }}
        >
          <img src={npm} alt="npm Logo" />
          NPM
        </div>
        <div
          css={{
            backgroundColor: '#9a414b',
          }}
        >
          <img src={jest} alt="Jest Logo" />
          JEST
        </div>
        <div
          css={{
            backgroundColor: '#292929',
          }}
        >
          <img src={playwright} alt="Playwright Logo" />
          PLAYWRIGHT
        </div>
        <div
          css={{
            backgroundColor: '#292929',
          }}
        >
          <img src={flyio} alt="Fly.io Logo" />
          FLY.IO
        </div>
        <div
          css={{
            backgroundColor: '#20c6b7',
          }}
        >
          <img src={netlify} alt="Netlify Logo" />
          NETLIFY
        </div>
        <div
          css={{
            backgroundColor: '#0078d7',
          }}
        >
          <img src={vscode} alt="VS Code Logo" />
          VS CODE
        </div>
        <div
          css={{
            backgroundColor: '#ff8700',
          }}
        >
          <img src={typo3} alt="Typo3 Logo" />
          TYPO3
        </div>
        <div
          css={{
            backgroundColor: '#46eacb',
          }}
        >
          <img src={drawsql} alt="DrawSQL Logo" />
          DRAWSQL
        </div>
        <div
          css={{
            backgroundColor: '#a259ff',
          }}
        >
          <img src={figma} alt="figma Logo" />
          FIGMA
        </div>
        <div
          css={{
            backgroundColor: '#40D0FB',
          }}
        >
          <img src={photoshop} alt="Adobe Photoshop Logo" />
          ADOBE PHOTOSHOP
        </div>
        <div
          css={{
            backgroundColor: '#FF3366',
          }}
        >
          <img src={indesign} alt="Adobe Indesign Logo" />
          ADOBE INDESIGN
        </div>
        <div
          css={{
            backgroundColor: '#f8a829',
          }}
        >
          <img src={illustrator} alt="Adobe Illustrator Logo" />
          ADOBE ILLUSTRATOR
        </div>
        <div
          css={{
            backgroundColor: '#8781bd',
          }}
        >
          <img src={afterEffects} alt="Adobe AfterEffects Logo" />
          ADOBE AFTER EFFECTS
        </div>
      </div>
      <h2>My Passions</h2>
      <div css={passions}>
        <div>
          <h3>Sports</h3>
          <div>
            <img src="sport.jpg" alt="Ute doing Aerial Silk" />
          </div>
        </div>
        <div>
          <h3>Traveling</h3>
          <div>
            <img
              src="traveling.jpg"
              alt="Ute in front of the palace in Taipei, Taiwan"
            />
          </div>
        </div>
        <div>
          <h3>Cooking & Baking</h3>
          <div>
            <img
              src="food.jpeg"
              alt="dish with fish on spinach and crispy potatoes"
            />
          </div>
        </div>
        <div>
          <h3>Plants</h3>
          <div>
            <img src="plants.jpeg" alt="an urban jungle" />
          </div>
        </div>
        <div>
          <h3>Interior Design</h3>
          <div>
            <img
              src="interior.jpg"
              alt="an apartment entrance with a black wall and vintage furniture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
