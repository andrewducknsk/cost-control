import styled from 'styled-components';

const FormControlStyled = styled.div`
	position: relative;
	margin-bottom: 15px;
`;

const LabelTextStyled = styled.p`
	position: relative;
	display: inline-block;
	margin: 0 0 0 15px;
	padding: 0 10px;
	font-size: 14px;
	background: white;
`;

export default {
	FormControl: FormControlStyled,
	LabelText: LabelTextStyled,
};
