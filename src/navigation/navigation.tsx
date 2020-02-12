import React, { memo, useContext } from 'react';
import CoreContext from '../core/core-context';
import { NavigationStyled, ListStyled, LinkStyled } from './navigation-styled';

interface INavigation {
  readonly links: Array<ILinks>;
}

interface ILinks {
  readonly label: string;
  readonly route: string;
}

const Navigation: React.FC = (): JSX.Element => {
  const { navigation }: { navigation: INavigation } = useContext(CoreContext);

  const renderListItem = (): Array<JSX.Element> =>
    navigation.links.map(
      (link): JSX.Element => (
        <li key={link.label}>
          <LinkStyled to={link.route}>{link.label}</LinkStyled>
        </li>
      )
    );

  return (
    <NavigationStyled>
      <ListStyled className="navigation_list">{renderListItem()}</ListStyled>
    </NavigationStyled>
  );
};

export default memo(Navigation);
