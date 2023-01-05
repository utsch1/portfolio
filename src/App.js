/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';

const navbar = css`
  background-color: #320d6d;
  color: #fff;
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
  position: fixed;

  nav > a {
    margin-right: 20px;
    text-decoration: none;
  }
`;

const introduction = css`
  background-color: #320d6d;
  color: #fff;
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
`;

function App() {
  return (
    <div className="App">
      <header css={navbar}>
        <nav>
          <a>About</a>
          <a>Projects</a>
          <a>Contact</a>
        </nav>
      </header>

      {/* Introduction */}
      <div css={introduction}>
        <h1>Hi, I am Ute Greiner.</h1>
        <h2>Web Developer with Marketing Background</h2>
      </div>

      <About />

      <Projects />

      <Contact />

    </div>
  );
}

export default App;
