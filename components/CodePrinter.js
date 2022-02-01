import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import propTypes from 'prop-types';

// let codeString = 'npm install serato-css';

const CodePrinter = ({ codeString, language }) => {
  return (
    <SyntaxHighlighter language={language} style={dracula}>
      {codeString}
    </SyntaxHighlighter>
  );
};

CodePrinter.propTypes = {
  codeString: propTypes.string.isRequired,
  language: propTypes.string,
};

CodePrinter.defaultProps = {
  codeString: 'Some code to highlight!',
  language: 'html',
};

export default CodePrinter;
