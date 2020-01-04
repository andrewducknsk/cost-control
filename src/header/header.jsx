import React, { memo, useContext } from 'react';
import CoreContext from '../core/core-context';
import Navigation from '../navigation/navigation';
import { HeaderStyled, H1Styled } from './header-styled';

const Header = () => {
	const { header } = useContext(CoreContext);

	return (
		<HeaderStyled>
			<H1Styled>{header.title}</H1Styled>
			<Navigation />
		</HeaderStyled>
	);
};

export default memo(Header);
