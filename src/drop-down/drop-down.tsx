import React, { memo, useEffect, useState } from 'react';
import Styled from './drop-down-styled';

interface IDropDownProps {
  readonly children: React.ReactNode;
  readonly isOpened?: boolean;
}

const DropDown: React.FC<IDropDownProps> = ({ children, isOpened = false }): JSX.Element | null => {
  const [renderChild, setRenderChild] = useState<boolean>(false);

  useEffect(() => {
    if (isOpened) {
      setRenderChild(true);
    }
  }, [isOpened]);

  const animationEnd: () => void = () => {
    if (!isOpened) {
      setRenderChild(false);
    }
  };

  return (
    <>
      {renderChild && (
        <Styled.DropDown show={isOpened} onAnimationEnd={animationEnd}>
          {children}
        </Styled.DropDown>
      )}
    </>
  );
};

export default memo(DropDown);
