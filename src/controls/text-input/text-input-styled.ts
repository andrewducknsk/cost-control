import styled from 'styled-components';
import { BaseControlStyled, ErrorControlStyled } from '../base-control-styled';

interface ITextInput {
  readonly status: boolean;
}

const InputStyled = styled(BaseControlStyled('input'))<ITextInput>`
  ${props => (props.status ? ErrorControlStyled : '')}
`;

export default {
  Input: InputStyled,
};
