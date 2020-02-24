import styled from 'styled-components';
import { BaseControlStyled, ErrorControlStyled } from '../base-control-styled';

interface INumberInput {
  readonly status: boolean;
}

const NumberInputStyled = styled(BaseControlStyled('input'))<INumberInput>`
  ${props => (props.status ? ErrorControlStyled : '')}
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export default {
  NumberInput: NumberInputStyled,
};
