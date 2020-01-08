import styled from 'styled-components';

const primaryStyle = {
	color: 'white',
	background: 'rebeccapurple',
	border: 'none',
	hover: {
		background: 'mediumpurple',
	},
	active: {
		boxShadow: 'inset 0 0 5px -1px purple',
	},
};

const secondaryStyle = {
	type: 'secondary',
	color: 'black',
	background: 'transparent',
	border: '1px solid mediumpurple',
	hover: {
		background: 'background: rgba(147, 112, 219, 0.15);',
	},
	active: {
		boxShadow: 'inset 0 0 3px 0 purple',
	},
};

const ButtonStyled = styled.button`
	width: 200px;
	height: 40px;
	font-size: 20px;
	line-height: 1.2;
	color: ${props => (props.styleType === secondaryStyle.type ? secondaryStyle.color : primaryStyle.color)};
	background: ${props =>
		props.styleType === secondaryStyle.type ? secondaryStyle.background : primaryStyle.background};
	border-radius: 25px;
	border: ${props => (props.styleType === secondaryStyle.type ? secondaryStyle.border : primaryStyle.border)};
	cursor: pointer;
	outline: none;
	transition: background ease 0.2s, box-shadow ease 0.1s;

	&:hover {
		background: ${props =>
			props.styleType === secondaryStyle.type
				? secondaryStyle.hover.background
				: primaryStyle.hover.background};
	}

	&:active {
		box-shadow: ${props =>
			props.styleType === secondaryStyle.type
				? secondaryStyle.active.boxShadow
				: primaryStyle.active.boxShadow};
	}
`;

export default {
	Button: ButtonStyled,
};
