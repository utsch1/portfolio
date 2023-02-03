/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { useState } from 'react';

const fadeInOpacity = keyframes`
   from {opacity: 0;}
 to {opacity: 1;}
`;

const fadeIn = css`
  animation: ${fadeInOpacity} 2s linear;
`;

const projects = css`
  width: calc(100vw - 60px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 40px;
  margin-bottom: 40px;
  font-size: 16px;
  @media (max-width: 500px) {
    margin: 0 10px 0 0;
    display: inline-block;
    height: 100%;
    overflow: scroll;
  }

  button {
    width: 100%;
    text-align: right;
    margin: 0 0 5px 0;
    padding: 0;
    font-weight: normal;
    font-size: 24px;
  }

  div {
    margin-bottom: 20px;
  }

  div > p {
    margin: 0 0 10px 0;
    width: 400px;
    @media (max-width: 500px) {
      width: 90%;
      margin-left: 30px;
      text-align: right;
    }
  }

  div > span {
    display: inline-block;
    text-align: right;
    width: 100%;
  }

  div > span > a {
    text-decoration: none;
    margin-left: 10px;
    border-left: 2px solid transparent;
    padding-left: 5px;
  }

  div > span > a:hover {
    text-decoration: none;
    border-left: 2px solid #7ebdc2;
    padding-left: 5px;
  }
`;

export function Projects() {
  const [showFeastful, setShowFeastful] = useState(false);
  const [showPlanteria, setShowPlanteria] = useState(false);
  const [showMemeGenerator, setShowMemeGenerator] = useState(false);

  function feastful() {
    setShowFeastful((wasOpened) => !wasOpened);
    if (showPlanteria === true) {
      setShowPlanteria(false);
    } else if (showMemeGenerator === true) {
      setShowMemeGenerator(false);
    }
  }

  function planteria() {
    setShowPlanteria((wasOpened) => !wasOpened);
    if (showFeastful === true) {
      setShowFeastful(false);
    } else if (showMemeGenerator === true) {
      setShowMemeGenerator(false);
    }
  }

  function memeGenerator() {
    setShowMemeGenerator((wasOpened) => !wasOpened);
    if (showPlanteria === true) {
      setShowPlanteria(false);
    } else if (showFeastful === true) {
      setShowFeastful(false);
    }
  }

  return (
    <div
      css={css`
        ${projects};
        ${fadeIn}
      `}
    >
      <button onClick={feastful}>feastful</button>
      {showFeastful && (
        <div>
          <p>
            feastful is a responsive full stack application. This app allows
            users to search for cooking lessons, and once authorised &
            authenticated, to create cooking lesson offers. Users may upload
            images to the site to complete their profiles and illustrate their
            cooking lesson offers.
          </p>
          <p>
            <b>Technologies:</b> Next.js, React, TypeScript, PostgreSQL,
            Cookies, REST API, Cloudinary, MaterialUI, DrawSQL, Figma
          </p>
          <span>
            <a href="https://github.com/utsch1/feastful">github &#8599;</a>
            <a href="https://github.com/utsch1/feastful">
              deployed site &#8599;
            </a>
          </span>
        </div>
      )}

      <button onClick={planteria}>planteria</button>
      {showPlanteria && (
        <div>
          <p>
            planteria is a full stack shop for exotic plants. The project has a
            landing page, an overview of all products, dynamic routes to product
            pages including the option to add products to the cart, a cart and a
            checkout page.
          </p>
          <p>
            <b>Technologies:</b> Next.js, React, TypeScript, PostgreSQL,
            Cookies, Emotion, Jest, Playwright
          </p>
          <span>
            <a href="https://github.com/utsch1/ecommerce-store-nextjs">
              github &#8599;
            </a>
            <a href="https://github.com/utsch1/feastful">
              deployed site &#8599;
            </a>
          </span>
        </div>
      )}
      <button onClick={memeGenerator}>meme generator</button>
      {showMemeGenerator && (
        <div>
          <p>
            The Meme Generator fedges and lists various images from an external
            API in a drop-down menu. With two input fields, one is able to write
            top and bottom text on the images, generate and download the final
            image.
          </p>
          <p>
            <b>Technologies:</b> React, CSS, External API
          </p>
          <span>
            <a href="https://github.com/utsch1/react-meme-generator">
              github &#8599;
            </a>
            <a href="https://github.com/utsch1/feastful">
              deployed site &#8599;
            </a>
          </span>
        </div>
      )}
    </div>
  );
}
