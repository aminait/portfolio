import { useState } from 'react';
import useEventListener from '@use-it/event-listener';
const sequence = ['17', '16', '65'];

const useKeyboardShortcut = () => {
  const [download, setDownload] = useState(false);
  const [pressed, setPressed] = useState(0);
  function handler({ key }) {
    if ((key = '17')) {
      pressed += 1;
    } else if (e.ctrlKey) {
      pressed += ' + Ctrl';
    } //and so on
    pressed += e.keyCode;
    console.log(pressed);
  }
  useEventListener('keydown', handler);
  return coords;
};

export default useKeyboardShortcut;
