import React, { memo, useContext } from 'react';
import CoreContext from '../core/core-context';
import Styled from './setting-bar-styled';

const SettingBar = () => {
	const { settingBar } = useContext(CoreContext);

	const renderButtons = () =>
		settingBar.buttons.map(button => (
			<Styled.FilterButton
				label={button.label}
				action={button.action}
				styleType={button.styleType}
				key={button.label}
			/>
		));

	return (
		<section>
			<Styled.FilterTitle>{settingBar.title}</Styled.FilterTitle>
			{renderButtons()}
		</section>
	);
};

export default memo(SettingBar);
