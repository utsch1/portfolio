/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

const fadeInOpacity = keyframes`
   from {opacity: 0;}
 to {opacity: 1;}
`;

const fadeIn = css`
  animation: ${fadeInOpacity} 2s linear;
`;

export function Home() {
  return (
    <div css={fadeIn}>
      <p>
        I am a 29 year old web developer, working and living in Vienna. My
        background is in Marketing. I recently graduated from a Fullstack Web
        Development Bootcamp where I learned the most important technologies in
        projects simulating future jobs.{' '}
      </p>
    </div>
  );
}
