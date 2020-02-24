import styled from 'styled-components';

interface ITooltipStyledProps {
  readonly left: number;
  readonly top: number;
}

const TooltipStyled = styled.div<ITooltipStyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(${props => props.left}px, ${props => props.top}px);
  display: inline-block;
  width: 50px;
  height: 50px;
  background: white;
  border: 1px solid black;
  z-index: 150000;
`;

export default {
  Tooltip: TooltipStyled,
};
