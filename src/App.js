/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import { About } from './About';
import { Projects } from './Projects';

const contents = css`
  border: 1px solid #efe6dd;
  width: calc(100vw - 60px);
`;

const navbar = css`
  color: #efe6dd;
  height: 50px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: fixed;
  margin: 40px;

  h1 {
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    margin: 0px;
  }

  h2 {
    margin: 10px 0 0 0;
  }

  nav {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    width: 120px;
  }

  nav > a {
    text-decoration: none;
    color: #efe6dd;
    margin-bottom: 10px;
    border-bottom: 2px solid #231f20;
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
    background-color: #231f20;
    color: #efe6dd;
    cursor: pointer;
    text-align: left;
    border-bottom: 2px solid #231f20;
  }

  nav > button:hover,
  button:focus {
    border-bottom: 2px solid #7ebdc2;
  }
`;

const introduction = css`
  background-color: #231f20;
  color: #efe6dd;
  height: 100vh;
  width: calc(100vw - 60px);
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  div {
    width: 230px;
    text-align: right;
    margin: 40px;
  }
`;

function App() {
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
    <div className="App">
      <div css={contents}>
        <header css={navbar}>
          <h1>Ute Greiner</h1>
          <h2>
            web developer <br />
            with marketing background
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
          <div>
            I am a 29 year old web developer, working and living in Vienna. My
            background is in Marketing. I recently graduated from a Fullstack
            Web Development Bootcamp where I learned the most important
            technologies in projects simulating future jobs.{' '}
          </div>
        </div>

        <About id="about" />

        <Projects />
      </div>
    </div>
  );
}

export default App;
