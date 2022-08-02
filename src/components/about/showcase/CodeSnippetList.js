import React from 'react';
import CodeSnippet from './CodeSnippet';
const CodeSnippetList = () => {
  return (
    <>
      {[0, 1, 2, 3].map((index) => (
        <CodeSnippet key={index} />
      ))}
    </>
  );
};

export default CodeSnippetList;
