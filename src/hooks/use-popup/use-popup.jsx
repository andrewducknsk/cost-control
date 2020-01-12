import { useCallback, useState } from 'react';

const usePopup = (initialState = false) => {
	const [showPopup, setShowPopup] = useState(initialState);
	const [scrollPosition, setScrollPosition] = useState(0);

	const fixedBodyPosition = useCallback(() => {
		if (showPopup) {
			document.body.style.top = '';
			document.body.style.position = '';
		} else {
			document.body.style.top = `-${document.documentElement.scrollTop}px`;
			document.body.style.position = 'fixed';
		}
	}, [showPopup]);

	const togglePopup = useCallback(() => {
		setShowPopup(!showPopup);
		setScrollPosition(document.documentElement.scrollTop);
		fixedBodyPosition();
	}, [showPopup, fixedBodyPosition]);

	return [showPopup, scrollPosition, togglePopup];
};

export default usePopup;
