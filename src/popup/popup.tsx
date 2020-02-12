import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Styled from './popup-styled';

interface IPopupProps {
  readonly children: JSX.Element;
  readonly onClose: any;
  readonly scrollPosition: any;
}

const Popup: React.FunctionComponent<IPopupProps> = ({ children, onClose, scrollPosition }) => {
  const [isShowAnimation, setIsShowAnimation] = useState(true);
  const popupElement = useRef(null);

  const onClosePopup = useCallback(() => {
    setIsShowAnimation(false);

    setTimeout((): void => {
      onClose();
      window.scrollTo(0, scrollPosition);
    }, 150);
  }, [onClose, scrollPosition]);

  const closeKeyDownEsc = useCallback(
    e => {
      const ESCAPE = 27;

      if (e.keyCode === ESCAPE) {
        onClosePopup();
      }
    },
    [onClosePopup]
  );

  const closeOutClick = useCallback(
    e => {
      const isClickOutElement = e.path.every((item: string) => item !== popupElement.current);
      if (isClickOutElement) {
        onClosePopup();
      }
    },
    [onClosePopup]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeKeyDownEsc);
    document.addEventListener('click', closeOutClick);

    return () => {
      document.removeEventListener('keydown', closeKeyDownEsc);
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
