import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CodeCopier = ({ textToCopy }) => {
  const [isCopied, setisCopied] = useState(false);

  return (
    <div className="copy-container">
      <CopyToClipboard text={textToCopy} onCopy={() => setisCopied(!isCopied)}>
        <button className="button-dark">{isCopied ? 'copied' : 'copy'}</button>
      </CopyToClipboard>
    </div>
  );
};

export default CodeCopier;
