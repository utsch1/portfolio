/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

const fadeInOpacity = keyframes`
   from {opacity: 0;}
 to {opacity: 1;}
`;

const fadeIn = css`
  animation: ${fadeInOpacity} 2s linear;
  @media (max-width: 500px) {
    height: 100%;
    overflow: scroll;
  }
`;

const techStack = css`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: wrap;
  font-size: 16px;

  p {
    width: 230px;
    text-align: right;
    margin-bottom: 5px;
  }
`;

const technologies = css`
  width: 70%;
  float: right;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: wrap;
  font-size: 14px;
  font-family: 'Bakbak One', sans-serif;
  margin: 10px 40px 40px 0;
  @media (max-width: 500px) {
    width: 90%;
    margin: 10px 10px 10px 0;
  }

  div {
    background-color: #efe6dd;
    color: #231f20;
    padding: 7px;
    display: flex;
    margin: 2px;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
  }
`;

export function TechStack() {
  return (
    <div css={fadeIn}>
      <div css={techStack}>
        <p>
          In the bootcamp, I used multiple different tools and technologies
          which I can complement with my knowledge in graphic design.
        </p>
      </div>
      <div css={technologies} id="technologies">
        <div>HTML5</div>
        <div>CSS3</div>
        <div>JAVASCRIPT</div>
        <div>TYPESCRIPT</div>
        <div>POSTGRESQL</div>
        <div>DATABASE MIGRATIONS</div>
        <div>REST API</div>
        <div>NODE.JS</div>
        <div>REACT</div>
        <div>NEXT.JS</div>
        <div>EMOTION</div>
        <div>MATERIAL UI</div>
        <div>CLOUDINARY</div>
        <div>GIT</div>
        <div>GITHUB</div>
        <div>NPM</div>
        <div>JEST</div>
        <div>PLAYWRIGHT</div>
        <div>FLY.IO</div>
        <div>NETLIFY</div>
        <div>VS CODE</div>
        <div>TYPO3</div>
        <div>DRAWSQL</div>
        <div>FIGMA</div>
        <div>PHOTOSHOP</div>
        <div>INDESIGN</div>
        <div>ILLUSTRATOR</div>
        <div>AFTER EFFECTS</div>
      </div>
    </div>
  );
}
