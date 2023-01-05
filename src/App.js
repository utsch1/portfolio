import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="relative flex row justify-between">
        <div>About</div>
        <div>Projects</div>
        <div>Contact</div>
      </nav>

      {/* Introduction */}
      <div>
        <h1>Hi, I am Ute Greiner.</h1>
        <h2>Web Developer with Marketing Background</h2>
      </div>

      {/* About */}
      <div>
        <h1>About</h1>
        <img
          src="UteGreiner.jpg"
          alt="Ute Greiner"
          width="100px"
          height="auto"
        />
        <p>
          Marketing expert gone web development:
          <br />
          About a year ago, I decided to become a Web Developer and graduated at
          a Full Stack Web Development Bootcamp at Upleveled GmbH. The bootcamp
          is an immersive web development bootcamp, in which we learned the
          latest technologies and applied our knowledge in multiple projects. I
          am a passionate, creative and open minded person with a good sense for
          design, which I honed during my career in marketing. I want to combine
          web development with my marketing expertise and would like to further
          grow in that field as a web developer.
        </p>
        <p>CV Download</p>
        <h2>Tech Skills</h2>
        <h3>Technologies</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <ul>
            <li>Emotion</li>
            <li>Tailwind CSS</li>
            <li>Material UI</li>
          </ul>
          <li>JavaScript (ES6)</li>
          <li>TypeScript</li>
          <li>Databases (PostgreSQL)</li>
          <li>Database Migrations</li>
          <li>REST API</li>
          <li>Node.js</li>
          <li>React</li>
          <li>Next.js</li>
        </ul>
        <h3>Tools</h3>
        <ul>
          <li>Git, GitHub</li>
          <li>Testing (Jest, Playwright)</li>
          <li>Deployment (fly.io, Netlify)</li>
          <li>VS Code</li>
          <li>Typo3</li>
          <li>DrawSQL</li>
          <li>Figma</li>
          <li>Adobe InDesign</li>
          <li>Adobe PhotoShop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe AfterEffects</li>
        </ul>
        <h2>My Passions</h2>
        <h3>Sports</h3>
        <img src="sport1.jpg" alt="Aerial Silk" width="100px" height="auto" />
        <h3>Traveling</h3>
        <img src="traveling1.jpg" alt="Traveling" width="100px" height="auto" />
        <h3>Cooking & Baking</h3>
        <img src="sport1.jpg" alt="Aerial Silk" width="100px" height="auto" />
        <h3>Plants</h3>
        <img src="sport1.jpg" alt="Aerial Silk" width="100px" height="auto" />
        <h3>Interior Design</h3>
        <img src="sport1.jpg" alt="Aerial Silk" width="100px" height="auto" />
      </div>

      {/* Projects */}
      <div>
        <h1>Projects</h1>
        <h2>feastful</h2>
        <p>
          feastful is a responsive full stack application. This app allows users
          to search for cooking lessons, and once authorised & authenticated, to
          create cooking lesson offers. Users may upload images to the site to
          complete their profiles and illustrate their cooking lesson offers.
        </p>
        <p>
          Technologies: Next.js, React, TypeScript, PostgreSQL, Cookies, REST
          API, Cloudinary, MaterialUI, DrawSQL, Figma
        </p>
        <h2>planteria</h2>
        <p>
          planteria is a full stack shop for exotic plants. The project has a
          landing page, an overview of all products, dynamic routes to product
          pages including the option to add products to the cart, a cart and a
          checkout page.
        </p>
        <p>
          Technologies: Next.js, React, TypeScript, PostgreSQL, Cookies,
          Emotion, Jest, Playwright
        </p>
        <h2>Meme Generator</h2>
        <p>
          The Meme Generator fedges and lists various images from an external
          API in a drop-down menu. With two input fields, one is able to write
          text on the images, generate and download the final image.
        </p>
        <p>Technologies: React, CSS, External API</p>
      </div>

      {/* Contact */}
      <div>
        <h1>Contact</h1>
        <p>LinkedIn</p>
        <p>GitHub</p>
        <p>Email</p>
      </div>
    </div>
  );
}

export default App;
