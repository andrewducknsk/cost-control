import styled, { keyframes } from 'styled-components';

const showPopup = keyframes`
	from { opacity: 0 }
	to {opacity: 1}
`;

const closePopup = keyframes`
from { opacity: 1 }
to {opacity: 0}
`;

const PopupStyled = styled.div`
	animation-name: ${props => (props.animation ? showPopup : closePopup)};
	animation-fill-mode: forwards;
	animation-duration: 0.15s;
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 100000;
`;

const PopupOuterStyled = styled.div`
	position: relative;
	width: 500px;
	min-height: 100px;
	margin: 50px auto 0;
	background: white;
	border-radius: 15px;
`;

const PopupInnerStyled = styled.div`
	padding: 25px;
`;

const PopupCloseButtonStyled = styled.button`
	position: absolute;
	top: 25px;
	right: 25px;
	width: 25px;
	height: 25px;
	padding: 0;
	background: transparent;
	border: none;
	cursor: pointer;
	outline: none;

	&:before,
	&:after {
		content: '';
		position: absolute;
		top: -1px;
		display: inline-block;
		width: 1px;
		height: 25px;
		background: rebeccapurple;
	}

	&:before {
		transform: rotate(-45deg);
	}

	&:after {
		transform: rotate(45deg);
	}
`;

export default {
	Popup: PopupStyled,
	PopupOuter: PopupOuterStyled,
	PopupInner: PopupInnerStyled,
	PopupCloseButton: PopupCloseButtonStyled,
};
