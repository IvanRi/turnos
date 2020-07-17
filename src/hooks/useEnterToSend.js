import { useEffect } from 'react';

const useEnterToSend = onSend => {
  useEffect(() => {
    const handleKeyDown = e => e.keyCode === 13 && onSend()
    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])
};

export default useEnterToSend;
