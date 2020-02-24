import React, { memo, useContext } from 'react';
import CoreContext from '../core/core-context';
import Navigation from '../navigation/navigation';
import Styled from './header-styled';
import { Locale } from '../core/locale-interface';

const Header: React.FC = (): JSX.Element => {
  const { header }: { header: Locale.Header } = useContext(CoreContext);

  return (
    <Styled.Header>
      <Styled.Title>{header.title}</Styled.Title>
      <Navigation />
    </Styled.Header>
  );
};

export default memo(Header);
