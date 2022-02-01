import CodeHandler from '../components/CodeHandler';
import TextHighlighter from '../components/TextHighlighter';

const gettingStarted = () => {
  let CodeSnippet_1 = 'npm install serato-css';

  return (
    <>
      <h1 className="font-subheading">Getting Started!</h1>
      <h3 className="font-size-large text-align-center color-secondary">
        Well trying this out is a good idea, here are ways to get started!
      </h3>
      {/* option 1 */}
      <div>
        <h2 className="font-subheading">1. Download and use Serato CSS</h2>
        <p>
          This is the easiest, just click the download button below and a file
          called
          {/* <span className="color-secondary margin-x-2">"serato.min.css"</span> */}
          <TextHighlighter>"serato.min.css"</TextHighlighter>
          will be downloaded to your device, and then you just import that into
          your workflow and start using the handies!
        </p>
      </div>
      {/* option 2 */}
      <div>
        <h2 className="font-subheading">2. Use Npm or Yarn!</h2>
        <p className="margin-bottom-2">
          Just open your terminal, and make sure to be or navigate into your
          project's directory and enter the following command.
        </p>
        <CodeHandler language="bash" codeSnippet={CodeSnippet_1} />
      </div>
      {/* option 3 */}
      <div>
        <h2 className="font-subheading">3. Use a CDN!</h2>
        <p>
          This is the easiest, just click the download button below and a file
          called
          {/* <span className="color-secondary margin-x-2">"serato.min.css"</span> */}
          <TextHighlighter>"serato.min.css"</TextHighlighter>
          will be downloaded to your device, and then you just import that into
          your workflow and start using the handies!
        </p>
      </div>
    </>
  );
};

export default gettingStarted;
