import React, { memo, useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Styled from './popup-styled';

const Popup = ({ children, onClose, scrollPosition }) => {
	const [isShowAnimation, setIsShowAnimation] = useState(true);

	const onClosePopup = useCallback(
		e => {
			e.stopPropagation();
			setIsShowAnimation(false);

			setTimeout(() => {
				onClose();
				window.scrollTo(0, scrollPosition);
			}, 150);
		},
		[onClose, scrollPosition]
	);

	const closeKeyDownEsc = useCallback(
		e => {
			const ESCAPE = 27;

			if (e.keyCode === ESCAPE) {
				onClosePopup(e);
			}
		},
		[onClosePopup]
	);

	useEffect(() => {
		document.addEventListener('keydown', closeKeyDownEsc);

		return () => document.removeEventListener('keydown', closeKeyDownEsc);
	}, [closeKeyDownEsc]);

	const renderPopup = () => (
		<Styled.Popup animation={isShowAnimation}>
			<Styled.PopupOuter>
				<Styled.PopupInner>{children}</Styled.PopupInner>
				<Styled.PopupCloseButton onClick={onClosePopup} />
			</Styled.PopupOuter>
		</Styled.Popup>
	);

	return ReactDOM.createPortal(renderPopup(), document.getElementById('popup'));
};

export default memo(Popup);
