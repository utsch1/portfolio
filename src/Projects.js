/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const projects = css`
  background-color: #ffbfb7;
  padding: 30px 100px;

  > h1 {
    margin: 0;
    text-align: center;
  }
`;

export function Projects() {
  return (
    <div css={projects}>
      <h1>Projects</h1>
      <h2>feastful</h2>
      <p>
        feastful is a responsive full stack application. This app allows users
        to search for cooking lessons, and once authorised & authenticated, to
        create cooking lesson offers. Users may upload images to the site to
        complete their profiles and illustrate their cooking lesson offers.
      </p>
      <p>
        Technologies: Next.js, React, TypeScript, PostgreSQL, Cookies, REST API,
        Cloudinary, MaterialUI, DrawSQL, Figma
      </p>
      <img
        src="/feastful.png"
        alt="landing page of feastful"
        width="300px"
        height="auto"
      />
      <h2>planteria</h2>
      <p>
        planteria is a full stack shop for exotic plants. The project has a
        landing page, an overview of all products, dynamic routes to product
        pages including the option to add products to the cart, a cart and a
        checkout page.
      </p>
      <p>
        Technologies: Next.js, React, TypeScript, PostgreSQL, Cookies, Emotion,
        Jest, Playwright
      </p>
      <img
        src="/planteria.png"
        alt="landing page of planteria"
        width="300px"
        height="auto"
      />

      <h2>Meme Generator</h2>
      <p>
        The Meme Generator fedges and lists various images from an external API
        in a drop-down menu. With two input fields, one is able to write text on
        the images, generate and download the final image.
      </p>
      <p>Technologies: React, CSS, External API</p>
      <img
        src="/memeGenerator.png"
        alt="landing page of the meme generator"
        width="300px"
        height="auto"
      />
    </div>
  );
}
