import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import Styled from './popup-styled';

const Popup = ({ children, onClose }) => {
	const onClosePopup = e => {
		e.stopPropagation();

		onClose();
	};

	const renderPopup = () => (
		<Styled.Popup>
			<Styled.PopupOuter>
				<Styled.PopupInner>{children}</Styled.PopupInner>
				<Styled.PopupCloseButton onClick={onClosePopup} />
			</Styled.PopupOuter>
		</Styled.Popup>
	);

	return ReactDOM.createPortal(renderPopup(), document.getElementById('popup'));
};

export default memo(Popup);
