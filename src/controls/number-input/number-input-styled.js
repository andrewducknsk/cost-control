import styled from 'styled-components';
import { BaseControlStyled } from '../base-control-styled';

const NumberInputStyled = styled(BaseControlStyled('input'))`
	&::-webkit-inner-spin-button {
		display: none;
	}
`;

export default {
	NumberInput: NumberInputStyled,
};
