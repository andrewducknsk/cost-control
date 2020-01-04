import React, { memo, useContext } from 'react';
import CoreContext from '../core/core-context';
import { NavigationStyled, ListStyled, LinkStyled } from './navigation-styled';

const Navigation = () => {
	const { navigation } = useContext(CoreContext);

	const renderListItem = () => {
		return navigation.links.map(link => (
			<li key={link.label}>
				<LinkStyled to={link.route}>{link.label}</LinkStyled>
			</li>
		));
	};

	return (
		<NavigationStyled>
			<ListStyled className="navigation_list">{renderListItem()}</ListStyled>
		</NavigationStyled>
	);
};

export default memo(Navigation);
