// import useCodeSnippet from '../hooks/useCodeSnippet';

import CodeHandler from '../components/CodeHandler';

const test = () => {
  // let CodeSnippet_1 = useCodeSnippet('npm install serato-css', 'bash');

  return (
    <div>
      <h1>foo!</h1>
      <CodeHandler />
      {/* <CodeSnippet_1 /> */}
    </div>
  );
};

export default test;
