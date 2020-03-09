import styled, { keyframes } from 'styled-components';

interface IDropDownProps {
  readonly show: boolean;
}

const show = keyframes`
  from {
    max-height: 0;
  }
  to {
    max-height: 100vh;
  }
`;

const hidden = keyframes`
  from {
    max-height: 100vh;
  }
  to {
    max-height: 0;
  }
`;

const DropDownStyled = styled.div<IDropDownProps>`
  animation-name: ${props => (props.show ? show : hidden)};
  animation-duration: ${props => (props.show ? '0.9s' : '0.4s')};
  animation-timing-function: ease;
  overflow: hidden;
`;

export default {
  DropDown: DropDownStyled,
};
