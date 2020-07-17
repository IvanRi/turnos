import { useEffect } from 'react';

const useEscapeToClose = onClose => {
  useEffect(() => {
    const handleKeyDown = e => e.keyCode === 27 && onClose()
    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])
};

export default useEscapeToClose;
