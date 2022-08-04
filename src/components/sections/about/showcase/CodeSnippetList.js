import React from 'react';
import CodeSnippet from './CodeSnippet';
const CodeSnippetList = ({ codeSnippets }) => {
  return (
    <>
      {codeSnippets.map((codeSnippet, index) => (
        <CodeSnippet codeSnippet={codeSnippet} key={index} />
      ))}
    </>
  );
};

export default CodeSnippetList;
