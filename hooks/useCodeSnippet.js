import CodePrinter from './CodeCopier';
import CodeCopier from './CodeCopier';

const CodeHandler = ({ codeSnippet, language }) => {
  return (
    <div className="code-container width-full flex-row center-with-flex">
      <CodePrinter codeString={codeSnippet} language={language} />
      <CodeCopier textToCopy={codeSnippet} />
    </div>
  );
};

export default CodeHandler;
