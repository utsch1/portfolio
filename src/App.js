/** @jsxImportSource @emotion/react */
import './App.css';
import { css, keyframes } from '@emotion/react';
import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';

const navbar = css`
  background-color: #231f20;
  opacity: 0.8;
  color: #efe6dd;
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
  position: fixed;

  nav > a {
    margin-right: 20px;
    opacity: 1;
    text-decoration: none;
  }

  nav > button {
    margin-right: 100px;
    font-size: 16px;
    opacity: 1;
    border: 0px;
    background-color: #231f20;
    color: #efe6dd;
    padding: 5px;
    cursor: pointer;
  }

  nav > button:hover,
  button:focus {
    border-top: 2px solid #7ebdc2;
    border-bottom: 2px solid #7ebdc2;
    /* text-decoration: underline overline;
    text-decoration-color: #7ebdc2; */
    color: #efe6dd;
    padding: 5px;
    cursor: pointer;
  }
`;

const introduction = css`
  background-color: #231f20;
  color: #efe6dd;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 48px;
  }

  div {
    justify-self: flex-end;
  }
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const arrow = css`
  font-size: 40px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${bounce} 1s ease infinite;
  :hover,
  :focus {
    background-color: #ffd447;
    color: #320d6d;
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
      <header css={navbar}>
        <nav>
          <a>About</a>
          <a>Projects</a>
          <a>Contact</a>
          <button onClick={onButtonClick}>CV &#8595;</button>
        </nav>
      </header>

      {/* Introduction */}
      <div css={introduction}>
        <h1>Hi, I am Ute Greiner.</h1>
        <h2>Web Developer with Marketing Background</h2>
        <div css={arrow}>&#8595;</div>
      </div>

      <About id="about" />

      <Projects />

      <Contact />
    </div>
  );
}

export default App;
