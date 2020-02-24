import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Styled from './popup-styled';

interface IPopupProps {
  readonly children: JSX.Element;
  readonly onClose: () => void;
  readonly scrollPosition: number;
}

const Popup: React.FC<IPopupProps> = ({ children, onClose, scrollPosition }): React.ReactPortal => {
  const [isShowAnimation, setIsShowAnimation] = useState<boolean>(true);
  const popupElement = useRef<HTMLDivElement>(null);

  const onClosePopup: () => void = useCallback(() => {
    setIsShowAnimation(false);

    setTimeout((): void => {
      onClose();
      window.scrollTo(0, scrollPosition);
    }, 150);
  }, [onClose, scrollPosition]);

  const closeKeyDownEsc: (e: React.KeyboardEvent) => void = useCallback(
    e => {
      const ESCAPE = 27;

      if (e.keyCode === ESCAPE) {
        onClosePopup();
      }
    },
    [onClosePopup]
  );

  // TODO: узнать тип event-a
  const closeOutClick: (e: React.SyntheticEvent) => void = useCallback(
    e => {
      // @ts-ignore
      const isClickOutElement = e.path.every((item: string) => item !== popupElement.current);
      if (isClickOutElement) {
        onClosePopup();
      }
    },
    [onClosePopup]
  );

  useEffect(() => {
    // @ts-ignore
    document.addEventListener('keydown', closeKeyDownEsc);
    // @ts-ignore
    document.addEventListener('click', closeOutClick);

    return () => {
      // @ts-ignore
      document.removeEventListener('keydown', closeKeyDownEsc);
      // @ts-ignore
      document.removeEventListener('click', closeOutClick);
    };
  }, [closeKeyDownEsc, closeOutClick]);

  const renderPopup = () => (
    <Styled.Popup animation={isShowAnimation}>
      <Styled.PopupOuter ref={popupElement}>
        <Styled.PopupInner>{children}</Styled.PopupInner>
        <Styled.PopupCloseButton onClick={onClosePopup} />
      </Styled.PopupOuter>
    </Styled.Popup>
  );

  return ReactDOM.createPortal(renderPopup(), document.getElementById('popup') as HTMLDivElement);
};

export default memo(Popup);
