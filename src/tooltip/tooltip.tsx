import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import Styled from './tooltip-styled';

interface ITooltipProps {
  readonly position: IPosition;
  readonly children: JSX.Element;
}

interface IPosition {
  readonly left: number;
  readonly width: number;
  readonly y: number;
}

const Tooltip: React.FC<ITooltipProps> = ({ position, children }): React.ReactPortal => {
  const centerTargetElement: number = position.left + position.width / 2;

  const renderTooltip = () => (
    <Styled.Tooltip top={position.y} left={centerTargetElement}>
      {children}
    </Styled.Tooltip>
  );

  return ReactDOM.createPortal(
    renderTooltip(),
    document.getElementById('tooltip') as HTMLDivElement
  );
};

export default memo(Tooltip);
