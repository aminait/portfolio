import React from 'react';
import { CodeBlock, anOldHope } from 'react-code-blocks';

const BindInput = ({ values }) => {
  const code = `
  const button = document.querySelector('#sendBtn');
  const message = {
    name: "${values.name}",
    email: "${values.email}",
    message: "${values.message}",
    date: "${values.date}"
  }

  button.addEventListener('click', () => {
    form.send(message);
  })
  `;
  return (
    <div>
      <CodeBlock
        text={code}
        language={'javascript'}
        showLineNumbers={true}
        theme={anOldHope}
        wrapLines
        codeBlock
        customStyle={{
          background: 'none',
        }}
      />
    </div>
  );
};

export default BindInput;
