import React, { memo, useContext } from 'react';
import CoreContext from '../core/core-context';
import Styled from './greeting-styled';
import { usePopup } from '../hooks';
import AddingExpenses from '../adding-expenses';
import Popup from '../popup';

const Greeting = () => {
	const [showPopup, togglePopup] = usePopup(false);
	const { greeting } = useContext(CoreContext);

	return (
		<Styled.Greeting>
			<Styled.Title>{greeting.title}</Styled.Title>
			<Styled.Description>{greeting.description}</Styled.Description>
			<Styled.Button onClick={togglePopup}>{greeting.buttonLabel}</Styled.Button>
			{showPopup && (
				<Popup onClose={togglePopup}>
					<AddingExpenses />
				</Popup>
			)}
		</Styled.Greeting>
	);
};

export default memo(Greeting);
