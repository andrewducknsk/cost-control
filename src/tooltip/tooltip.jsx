import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import Styled from './tooltip-styled';

const Tooltip = ({ position, children }) => {
	console.log('%c tooltip ', 'color: #000; background-color: #95B46A', 'Tooltip', position);
	const centerTargetElement = position.left + position.width / 2;

	const renderTooltip = () => (
		<Styled.Tooltip top={position.y} left={centerTargetElement}>
			{children}
		</Styled.Tooltip>
	);

	return ReactDOM.createPortal(renderTooltip(), document.getElementById('tooltip'));
};

export default memo(Tooltip);
