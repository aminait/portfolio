import React from 'react';
import { CodeBlock, anOldHope, far, noctisViola, pojoaque } from 'react-code-blocks';

const BindInput = ({ values }) => {
  const code = `const button = document.querySelector('#sendBtn');
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
  );
};

export default BindInput;
