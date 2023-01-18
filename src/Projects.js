/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const projects = css`
  h1 {
    margin: 0;
    text-align: center;
    text-transform: uppercase;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const imageRight = css`
  display: flex;
  align-items: flex-start;

  div {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-right: 20px;
    margin-bottom: 40px;
  }

  div > p {
    margin: 0 0 10px 0;
  }

  img {
    border: 2px solid #000;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;

    text-align: center;
    color: #320d6d;
    border: 2px solid #320d6d;
    align-self: center;
    padding: 10px;
    width: 20%;
  }

  a:hover,
  a:focus {
    box-shadow: inset 0 0 0 2em #320d6d;
    color: #ffd447;
    transition-duration: 1s;
  }
`;

const imageLeft = css`
  display: flex;
  align-items: flex-start;

  div {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-left: 20px;
    margin-bottom: 40px;
  }
  div > p {
    margin: 0 0 10px 0;
  }

  img {
    border: 2px solid #000;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;

    text-align: center;
    color: #320d6d;
    border: 2px solid #320d6d;
    align-self: center;
    padding: 10px;
    width: 20%;
  }

  a:hover,
  a:focus {
    box-shadow: inset 0 0 0 2em #320d6d;
    color: #ffd447;
    transition-duration: 1s;
  }
`;

export function Projects() {
  return (
    <div css={projects}>
      <h1>Projects</h1>
      <h2>feastful</h2>
      <div css={imageRight}>
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
          <a href="https://github.com/utsch1/feastful">View on GitHub</a>
        </div>
        <img
          src="/feastful.png"
          alt="landing page of feastful"
          width="300px"
          height="auto"
        />
      </div>
      <div>
        <h2>planteria</h2>
        <div css={imageLeft}>
          <img
            src="/planteria.png"
            alt="landing page of planteria"
            width="300px"
            height="auto"
          />
          <div>
            <p>
              planteria is a full stack shop for exotic plants. The project has
              a landing page, an overview of all products, dynamic routes to
              product pages including the option to add products to the cart, a
              cart and a checkout page.
            </p>
            <p>
              <b>Technologies:</b> Next.js, React, TypeScript, PostgreSQL,
              Cookies, Emotion, Jest, Playwright
            </p>
            <a href="https://github.com/utsch1/ecommerce-store-nextjs">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <div>
        <h2>Meme Generator</h2>
        <div css={imageRight}>
          <div>
            <p>
              The Meme Generator fedges and lists various images from an
              external API in a drop-down menu. With two input fields, one is
              able to write top and bottom text on the images, generate and
              download the final image.
            </p>
            <p>
              <b>Technologies:</b> React, CSS, External API
            </p>
            <a href="https://github.com/utsch1/react-meme-generator">
              View on GitHub
            </a>
          </div>
          <img
            src="/memeGenerator.png"
            alt="landing page of the meme generator"
            width="300px"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
}
