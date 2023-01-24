/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const about = css`
  padding: 30px;
`;

const introduction = css`
  margin: auto;
  width: 200px;
  height: auto;
`;

const techStack = css`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: wrap;
  font-size: 14px;

  p {
    width: 230px;
    text-align: right;
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
  font-family: 'Bakbak One', cursive;

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

const passions = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  div > div {
    background-color: #efe6dd;
    margin-left: 20px;
    width: 150px;
    height: 150px;
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
  }

  div > div > img:first-child {
    position: absolute;
    padding-left: 27px;
    padding-top: 24px;
    width: 100px;
    height: auto;
  }

  div > div > img:last-child {
    position: relative;
    justify-self: center;
    align-self: center;
    flex-shrink: 0;
    width: 150px;
    height: auto;
    opacity: 0;
    transition: opacity 0.1s;
  }
  div > div > img:last-child:hover {
    opacity: 1;
    transition: opacity 1s;
  }
`;

export function About() {
  return (
    <div css={about}>
      <div css={introduction}>
        <img
          src="UteGreiner.jpg"
          alt="Ute Greiner"
          width="200px"
          height="auto"
        />
      </div>
      <div css={techStack}>
        <p>
          I am a very passionate person and can get excited about minor things.
          My main passions are (hover):
        </p>
      </div>
      <div css={passions}>
        <div>
          <div>
            <img
              src="sportIcon.png"
              alt="Sport Icon showing a bar with gymnastic rings"
            />

            <img src="sport.jpg" alt="Ute doing Aerial Silk" />
          </div>
        </div>
        <div>
          <div>
            <img
              src="travelingIcon.png"
              alt="Traveling Icon showing the World with a plane"
            />

            <img
              src="traveling.jpg"
              alt="Ute in front of the palace in Taipei, Taiwan"
            />
          </div>
        </div>
        <div>
          <div>
            <img src="cookingIcon.png" alt="Cooking Icon with a chef's hat" />

            <img
              src="food.jpeg"
              alt="dish with fish on spinach and crispy potatoes"
            />
          </div>
        </div>
        <div>
          <div>
            <img src="plantIcon.png" alt="Plant Icon" />

            <img src="plants.jpeg" alt="an urban jungle" />
          </div>
        </div>
        <div>
          <div>
            <img
              src="interiorDesignIcon.png"
              alt="Interior Design Icon showing a staircase with plants"
            />
            <img
              src="interior.jpg"
              alt="an apartment entrance with a black wall and vintage furniture"
            />
          </div>
        </div>
      </div>

      <div css={techStack}>
        <p>
          In the bootcamp, I used multiple different tools and technologies
          which I can complement with my graphic design knowledge:
        </p>
      </div>
      <div css={technologies}>
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
