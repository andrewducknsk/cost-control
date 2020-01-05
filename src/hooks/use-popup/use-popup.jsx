import { useCallback, useState } from 'react';

const usePopup = (initialState = false) => {
	const [showPopup, setShowPopup] = useState(initialState);
	const togglePopup = useCallback(() => setShowPopup(!showPopup), [showPopup]);

	return [showPopup, togglePopup];
};

export default usePopup;
