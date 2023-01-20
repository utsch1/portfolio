/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { About } from './About';
import darkMode from './Illustrations/darkMode.png';
import lightMode from './Illustrations/lightMode.png';
import { Projects } from './Projects';

const contents = css`
  border: 1px solid #efe6dd;
  width: calc(100vw - 60px);
`;

const navbar = css`
  height: 50px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: fixed;
  margin: 40px;

  h1 {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    margin: 0px;
  }

  h2 {
    margin: 0;
    font-size: 22px;
    font-weight: lighter;
  }

  nav {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    width: 120px;
    font-weight: lighter;
  }

  nav > a {
    text-decoration: none;
    margin-bottom: 10px;
    border-bottom: 2px solid transparent;
  }

  nav > a:hover,
  a:focus {
    border-bottom: 2px solid #7ebdc2;
  }

  nav > button {
    margin-bottom: 10px;
    font-size: 16px;
    border: 0px;
    padding: 0px;
    background-color: transparent;
    cursor: pointer;
    text-align: left;
    border-bottom: 2px solid transparent;
    font-weight: lighter;
  }

  nav > button:hover,
  button:focus {
    border-bottom: 2px solid #7ebdc2;
  }
`;

const introduction = css`
  height: 100vh;
  width: calc(100vw - 60px);
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  p {
    width: 230px;
    text-align: right;
    margin: 40px;
  }
`;

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

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
    <div className={`App ${theme}`}>
      {theme === 'dark' ? (
        <button
          onClick={toggleTheme}
          css={{ position: 'absolute', right: '20px', top: '5px' }}
        >
          <img src={lightMode} alt="sun icon" width="20px" />
        </button>
      ) : (
        <button
          onClick={toggleTheme}
          css={{ position: 'absolute', right: '20px', top: '5px' }}
        >
          <img src={darkMode} alt="moon icon" width="20px" />
        </button>
      )}
      {/* <button onClick={toggleTheme}>(theme='dark' ? dark : light)</button> */}
      <div css={contents}>
        <header css={navbar}>
          <h1>Ute Greiner</h1>
          <h2>
            web developer with <br />
            marketing background
          </h2>
          <nav>
            <a>more about me</a>
            <a>tech stack</a>
            <a>projects</a>
            <button onClick={onButtonClick}>download cv</button>
            <a href="https://github.com/utsch1">github &#8599;</a>
            <a href="https://www.linkedin.com/in/ute-greiner/">
              linkedin &#8599;
            </a>
          </nav>
        </header>

        {/* Introduction */}
        <div css={introduction}>
          <p>
            I am a 29 year old web developer, working and living in Vienna. My
            background is in Marketing. I recently graduated from a Fullstack
            Web Development Bootcamp where I learned the most important
            technologies in projects simulating future jobs.{' '}
          </p>
        </div>

        <About id="about" />

        <Projects />
      </div>
    </div>
  );
}

export default App;
