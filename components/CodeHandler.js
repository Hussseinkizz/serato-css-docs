import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import propTypes from 'prop-types';
import { useStore } from '../store/store';

// let codeSnippet = 'npm install serato-css';

const CodeHandler = ({ codeSnippet, language }) => {
  const [isCopied, setisCopied] = useState(false);

  const {
    state: { darkMode },
  } = useStore();

  return (
    <div
      className={`code-container width-full flex-row center-with-flex background-gray-400 border-radius-normal padding-x-5 ${
        darkMode && '--dark'
      }`}
    >
      {/* Syntax Highlighter Container */}
      <div className="grow-1">
        <SyntaxHighlighter language={language} style={dracula}>
          {codeSnippet}
        </SyntaxHighlighter>
      </div>
      {/* Copy To Clipboard Container */}
      <div className="copy-container">
        <CopyToClipboard
          text={codeSnippet}
          onCopy={() => setisCopied(!isCopied)}
        >
          <button className="button-primary">
            {isCopied ? 'copied' : 'copy'}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

CodeHandler.propTypes = {
  codeString: propTypes.string.isRequired,
  language: propTypes.string,
};

CodeHandler.defaultProps = {
  codeString: 'Some code to highlight!',
  language: 'html',
};

export default CodeHandler;
