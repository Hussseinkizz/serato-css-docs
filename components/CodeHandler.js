import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import propTypes from 'prop-types';
import { useStore } from '../store/store';

// let codeSnippet = 'npm install serato-css';

const CodeHandler = ({ codeSnippet: { code, language }, dontShowCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const {
    state: { darkMode },
  } = useStore();

  return (
    <div
      className={`code-container width-full flex-row center-with-flex background-gray-400 border-radius-normal padding-x-5 margin-y-4 ${
        darkMode && '--dark'
      }`}
    >
      {/* Syntax Highlighter Container */}
      <div className="grow-1 flex-wrap">
        <SyntaxHighlighter language={language} style={dracula} wrapLongLines>
          {code}
        </SyntaxHighlighter>
      </div>
      {/* Copy To Clipboard Container */}
      {dontShowCopy ? (
        ''
      ) : (
        <div className="copy-container">
          <CopyToClipboard
            text={code}
            onCopy={() => setIsCopied(true)}
            onDoubleClick={() => setIsCopied(!isCopied)}
          >
            <button className="button-primary serato-gradient-on-background">
              {isCopied ? 'copied' : 'copy'}
            </button>
          </CopyToClipboard>
        </div>
      )}
    </div>
  );
};

CodeHandler.propTypes = {
  codeString: propTypes.string.isRequired,
  language: propTypes.string,
  dontShowCopy: propTypes.bool,
};

CodeHandler.defaultProps = {
  codeString: 'Some code to highlight!',
  language: 'html',
  dontShowCopy: false,
};

export default CodeHandler;
