import styled from 'styled-components';
import { BaseControlStyled, ErrorControlStyled } from '../base-control-styled';

const NumberInputStyled = styled(BaseControlStyled('input'))`
  ${props => (props.status ? ErrorControlStyled : '')}
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export default {
  NumberInput: NumberInputStyled,
};
