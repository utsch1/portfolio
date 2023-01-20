/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// import github from './Logos/github.png';
// import websiteLight from './Logos/websiteLight.png';

const projects = css`
  width: calc(100vw - 60px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  h2 {
    width: 230px;
    text-align: right;
    margin: 0 30px 0 0;
    font-weight: normal;
  }
`;

export function Projects() {
  return (
    <div css={projects}>
      <h2>feastful</h2>
      {/* <div>
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
          <a href="https://github.com/utsch1/feastful">
            <img src={github} alt="GitHub Logo" />{' '}
          </a>
          <a href="https://github.com/utsch1/feastful">
            <img src={websiteLight} alt="Website Icon" />{' '}
          </a>
        </div>
      </div> */}
      <div>
        <h2>planteria</h2>
        {/* <div>
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
              <img src={github} alt="GitHub Logo" />{' '}
            </a>
            <a href="https://github.com/utsch1/feastful">
              <img src={websiteLight} alt="Website Icon" />{' '}
            </a>
          </div>
        </div> */}
      </div>
      <div>
        <h2>meme generator</h2>
        {/* <div>
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
              <img src={github} alt="GitHub Logo" />
            </a>
            <a href="https://github.com/utsch1/feastful">
              <img src={websiteLight} alt="Website Icon" />{' '}
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
