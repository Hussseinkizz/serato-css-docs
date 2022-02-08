import CodeHandler from '../components/CodeHandler';
import Comment from '../components/Comment';
import StaticFlag from '../components/StaticFlag';
import TextHighlighter from '../components/TextHighlighter';
import { codeExamples, references } from '../store/data';

const gettingStarted = () => {
  const [{ cdnLink, cdnLinkCSS, cssLink, npmInstall, npmUse, htmlSample }] =
    codeExamples;
  const [{ downloadLink }] = references;

  return (
    <section className="container-fluid">
      <h1 className="font-subheading text-align-center">Getting Started!</h1>
      <h3 className="font-size-large text-align-center color-secondary">
        Well trying this out is a good idea, here are ways to get started!
      </h3>

      <div className="container margin-y-small-on-children margin-top-6">
        {/* option 1 */}
        <div>
          <h2 className="font-subheading flex align-items-center">
            <span className="responsive-margin-right-normal">
              1. Use a CDN!
            </span>
            <StaticFlag text="Recommended" />
          </h2>
          <p>
            A CDN is a content delivery network that allows you to consume
            packages such as <TextHighlighter text="serato.css" /> without any
            further setup, it just works on the go, just add this link below to
            your head tag in your html.
          </p>
          <CodeHandler codeSnippet={cdnLink} />
          <p>
            <span className="font-semibold">For use with css:</span> <br />
            Say you want to use serato css along your custom css, just add the
            code below on top most line to your css file and you start using the
            handy classes on the fly!
          </p>
          <CodeHandler codeSnippet={cdnLinkCSS} />
        </div>

        {/* option 2 */}
        <div>
          <h2 className="font-subheading flex align-items-center">
            <span className="responsive-margin-right-normal">
              2. Use Npm or Yarn!
            </span>
            <StaticFlag text="Recommended" />
          </h2>
          <p className="margin-bottom-2">
            This option is the most recommended for any project that uses other
            ways of making stuff happen on web other than plain html, say react,
            vue or svelte. This approach suits those well, so you just open your
            terminal, and make sure to be or navigate into your project's main
            or root directory and enter the following command.
          </p>
          <CodeHandler codeSnippet={npmInstall} />
          <Comment />
          <p>
            Now after the installation is complete, add this too to your top
            most component or page, usually an
            <TextHighlighter text="index.js" /> file.
          </p>
          <CodeHandler codeSnippet={npmUse} />
        </div>

        {/* option 3 */}
        <div>
          <h2 className="font-subheading">3. Download and use Serato CSS</h2>
          <p>
            This is kind of advanced but again easy, just click on
            <a href={downloadLink.item} className="link margin-x-2">
              download
            </a>
            and an archive containing both the minified and non minified serato
            css files will be downloaded to your device, then just extract that
            using any archiving software such as winrar or 7zip and then import
            the file into your project and your ready to go.
            <br />
            <br />
            <span className="font-semibold">For example:</span> <br />
            Assuming your project is using plain html and you have now placed
            the
            <TextHighlighter text="serato.css" /> file in your project's main or
            root directory, you import it as below in your html document's head
            tag. The usual stuff of importing any css file into any html
            project, right!
          </p>
          <CodeHandler codeSnippet={cssLink} />
        </div>

        {/* tips & recommendations */}
        <div>
          <h2 className="font-subheading">Tips And Recommendations</h2>
          <p>
            Consider the following for a super dope experince, and firstly if
            you used the cdn approach to use serato css, here is an example of
            how you can use it right away!
          </p>
          {/* <CodeHandler codeSnippet={htmlSample} /> */}
        </div>
      </div>
    </section>
  );
};

export default gettingStarted;
