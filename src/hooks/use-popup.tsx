import { useCallback, useState } from 'react';

// TODO: types
const usePopup = (initialState = false) => {
  const [showPopup, setShowPopup] = useState<boolean>(initialState);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const fixedBodyPosition: () => void = useCallback(() => {
    if (showPopup) {
      document.body.style.top = '';
      document.body.style.position = '';
    } else {
      document.body.style.top = `-${document.documentElement.scrollTop}px`;
      document.body.style.position = 'fixed';
    }
  }, [showPopup]);

  const togglePopup: () => void = useCallback(() => {
    setShowPopup(!showPopup);
    setScrollPosition(document.documentElement.scrollTop);
    fixedBodyPosition();
  }, [showPopup, fixedBodyPosition]);

  return [showPopup, scrollPosition, togglePopup] as const;
};

export default usePopup;
