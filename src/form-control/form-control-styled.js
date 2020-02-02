import styled from 'styled-components';

const FormControlStyled = styled.div`
	position: relative;
	margin-bottom: 10px;
	height: 66px;
`;

const LabelTextStyled = styled.p`
	position: relative;
	display: inline-block;
	margin: 0 0 0 15px;
	padding: 0 10px;
	font-size: 14px;
	background: white;
`;

const MessageStyled = styled.p`
	display: inline-block;
	color: red;
	margin: 5px 0 0;
`;

export default {
	FormControl: FormControlStyled,
	LabelText: LabelTextStyled,
	Message: MessageStyled,
};
