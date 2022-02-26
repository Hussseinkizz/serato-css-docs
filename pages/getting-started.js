import Link from 'next/link';
import CodeHandler from '../components/CodeHandler';
import Comment from '../components/Comment';
import StaticFlag from '../components/StaticFlag';
import TextHighlighter from '../components/TextHighlighter';
import { codeExamples, references } from '../store/data';
import * as IoIcons from 'react-icons/io5';

const GettingStarted = () => {
  const [{ cdnLink, cdnLinkCSS, cssLink, npmInstall, npmUse, htmlSample }] =
    codeExamples;
  const [
    { downloadLink, cssIntelliSenseLink, starterKitLink, themingKitCodepen },
  ] = references;

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
          <h2 className="font-subheading"># Tips And Recommendations</h2>
          <p>
            Consider the following for a super dope experince, and firstly if
            you used the cdn approach to use serato css, here is an example of
            how you can use it right away!
          </p>
          <CodeHandler codeSnippet={htmlSample} dontShowCopy />
          <p>
            In the example above we're grabbing serato css using a cdn link and
            then use it's handy helper class
            <TextHighlighter text="center-with-grid" /> on a section to center
            the containing stuff, in this case, the h1 with other serato css
            helper classes which give the text a cool gradient and make it bold
            with title looks. So go on and start using other cool handy classes
            of serato css, but also consider the following tips.
          </p>
          <div>
            <h3 className="font-subheading font-size-normal margin-top-4">
              # Use Vscode extension to get autocompletion on classes.
            </h3>
            <p>
              This is super handy cause starting out you won't know what the
              framework has in house for everything though you won't struggle to
              remember class names as is with other frameworks cause here we use
              a flat naming covention for almost everything so button is button
              or it's variance and others such as button-primary, margin-top-1,
              background-gray-900, color-white etc. Everything is quite
              relatable and predictable no complex class names to make you check
              docs everytime. <br />
              <br /> Assuming you use visual studio code, "IntelliSense for CSS
              class names in HTML" extension by Zignd can get the work done.
              <br />
              <Link href={cssIntelliSenseLink.item} passHref>
                <a className="link">
                  IntelliSense For CSS Class Names In HTML - Vscode Extention
                </a>
              </Link>
            </p>
          </div>
          <div>
            <h3 className="font-subheading font-size-normal margin-top-4">
              # Look into Serato CSS resources and examples to see it in action!
            </h3>
            <p>
              You can ofcourse get the
              <Link href={starterKitLink.item} passHref>
                <a className="link margin-x-1">Serato CSS Starter Kit</a>
              </Link>
              which contains the theming kit, some serato css cheat sheet and
              other great resources to get you started including links to other
              projects that are using serato css. But if that's too much for
              you, you can then just check out this codepen!
              <br />
              <Link href={themingKitCodepen.item} passHref>
                <a className="link margin-x-1">
                  Serato CSS Theming Kit Codepen
                </a>
              </Link>
            </p>
          </div>
          <div className="margin-bottom-2 margin-top-4 font-subheading background-gray-200 padding-4 border-radius-normal text-align-center font-size-normal text-reset-casing">
            Those up should give you a good start, let's dive into the
            documentation to get a hang of this.
            <br />
            <div className="display-flex justify-content-center margin-top-2">
              <span className="dispaly-flex gap-1 align-items-center justify-content-center">
                Next Up
                <IoIcons.IoChevronForwardOutline className="icon animation-horizontal is-animating" />
              </span>
              <Link href="/base/reset/reset">
                <a className="link">Base - Reset</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
