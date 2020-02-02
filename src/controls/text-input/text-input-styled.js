import styled from 'styled-components';
import { BaseControlStyled, ErrorControlStyled } from '../base-control-styled';

const InputStyled = styled(BaseControlStyled('input'))`
	${props => (props.status ? ErrorControlStyled : '')}
`;

export default {
	Input: InputStyled,
};
