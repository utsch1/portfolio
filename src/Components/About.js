/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// const about = css`
//   padding: 30px;
// `;

const photo = css`
  position: absolute;
  top: 0;
  left: calc(50% - 100px);
  width: 200px;
  height: 200px;
  border: 1px solid #231f20;
  padding: 0;
`;

const aboutMe = css`
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

const passions = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-right: 40px;
  margin-bottom: 30px;

  div > div {
    background-color: #efe6dd;
    width: 100px;
    height: 100px;
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    margin: 10px 0 0 10px;
  }

  div > div > img:first-child {
    position: absolute;
    padding-left: 27px;
    padding-top: 24px;
    width: 50px;
    height: auto;
  }

  div > div > img:last-child {
    position: relative;
    justify-self: center;
    align-self: center;
    flex-shrink: 0;
    width: 100px;
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
    <div>
      <div css={photo}>
        <img
          src="UteGreiner.jpg"
          alt="Ute Greiner"
          width="200px"
          height="auto"
        />
      </div>
      <div css={aboutMe}>
        <p>
          I am an open-minded and passionate person who can get excited about
          minor things. My main passions are <i>(hover)</i>
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
    </div>
  );
}
