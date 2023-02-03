/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { About } from './Components/About';
import { Home } from './Components/Home';
import { Projects } from './Components/Projects';
import { TechStack } from './Components/TechStack';

// import darkMode from './Illustrations/darkMode.png';
// import lightMode from './Illustrations/lightMode.png';

const contents = css`
  border: 1px solid #efe6dd;
  width: calc(100vw - 60px);
  height: calc(100vh - 60px);
  @media (max-width: 500px) {
    max-height: calc(100vh - 60px);
    display: block;
    overflow: scroll;
  }
`;

const navbar = css`
  height: 50px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: fixed;
  margin: 40px;
  @media (max-width: 500px) {
    margin: 10px 10px 40px 10px;
    height: auto;
    position: static;
  }

  h1 {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    margin: 0px;
  }

  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: lighter;
  }

  nav {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    width: 120px;
    font-weight: lighter;
    @media (max-width: 500px) {
      margin-top: 40px;
      flex-direction: row;
      flex-wrap: wrap;
      width: calc(100vw - 60px);
    }
  }

  nav > a {
    text-decoration: none;
    margin-bottom: 10px;
    border-bottom: 2px solid transparent;
    @media (max-width: 500px) {
      margin-right: 20px;
    }
  }

  nav > a:hover {
    border-left: 2px solid #7ebdc2;
    padding-left: 5px;
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
    font-family: 'Inter', sans-serif;
    font-weight: lighter;
    @media (max-width: 500px) {
      margin-right: 20px;
    }
  }

  nav > button:focus {
    border-left: 2px solid #7ebdc2;
    padding-left: 5px;
  }
`;

const introduction = css`
  height: calc(100vh - 60px);
  width: calc(100vw - 60px);
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 0;
  @media (max-width: 500px) {
    height: calc(100% - 300px);
    overflow: hidden;
  }

  p {
    width: 230px;
    text-align: right;
    margin: 40px;
    @media (max-width: 500px) {
      margin: 10px 10px 0 0;
    }
  }
`;

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [showHome, setShowHome] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showTechStack, setShowTechStack] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

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

  function home() {
    setShowHome((wasOpened) => !wasOpened);
    if (showAbout === true) {
      setShowAbout(false);
    } else if (showProjects === true) {
      setShowProjects(false);
    } else if (showTechStack === true) {
      setShowTechStack(false);
    }
  }

  function about() {
    setShowAbout((wasOpened) => !wasOpened);
    if (showHome === true) {
      setShowHome(false);
    } else if (showProjects === true) {
      setShowProjects(false);
    } else if (showTechStack === true) {
      setShowTechStack(false);
    }
  }

  function techStack() {
    setShowTechStack((wasOpened) => !wasOpened);
    if (showHome === true) {
      setShowHome(false);
    } else if (showAbout === true) {
      setShowAbout(false);
    } else if (showProjects === true) {
      setShowProjects(false);
    }
  }

  function projects() {
    setShowProjects((wasOpened) => !wasOpened);
    if (showHome === true) {
      setShowHome(false);
    } else if (showAbout === true) {
      setShowAbout(false);
    } else if (showTechStack === true) {
      setShowTechStack(false);
    }
  }

  const cvDownload = () => {
    // using Java Script method to get PDF file
    fetch('UteGreiner_CV.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement('a');
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
          css={{
            position: 'absolute',
            right: '21px',
            top: '5px',
          }}
        >
          {/* <img src={lightMode} alt="sun icon" width="20px" /> */}
          LIGHT
        </button>
      ) : (
        <button
          onClick={toggleTheme}
          css={{
            position: 'absolute',
            right: '21px',
            top: '5px',
          }}
        >
          {/* <img src={darkMode} alt="moon icon" width="20px" /> */}
          DARK
        </button>
      )}
      <div css={contents}>
        <div css={navbar}>
          <h1>Ute Greiner</h1>
          <h2>
            web developer with <br />
            marketing background
          </h2>
          <nav>
            <button onClick={home}>home</button>
            <button onClick={about}>about me</button>
            <button onClick={techStack}>tech stack</button>
            <button onClick={projects}>projects</button>
            <button onClick={cvDownload}>download cv</button>
            <a href="https://github.com/utsch1">github &#8599;</a>
            <a href="https://www.linkedin.com/in/ute-greiner/">
              linkedin &#8599;
            </a>
          </nav>
        </div>

        <div css={introduction}>
          {showHome && <Home id="home" />}
          {showAbout && <About id="about" />}

          {showTechStack && <TechStack id="techStack" />}

          {showProjects && <Projects id="projects" />}
        </div>
      </div>
    </div>
  );
}

export default App;
