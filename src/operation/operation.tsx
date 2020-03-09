import React, { memo, useState } from 'react';
import Styled from './operation-styled';
import OperationItem from './operation-item';
import OperationSetting from './operation-setting';
import { IOperationProps } from './index';
import { Icons } from '../icon';
import DropDown from '../drop-down';

const Operation: React.FC<IOperationProps> = ({ header, body }): JSX.Element => {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const renderOperationItem: (section: object) => Array<JSX.Element> = section => {
    // Immutable.js
    // @ts-ignore
    return section.map(item => (
      <OperationItem label={item.get('label')} value={item.get('value')} key={item.get('label')} />
    ));
  };

  const onShowSettings: () => void = () => setShowSettings(!showSettings);

  return (
    <>
      <Styled.Operation>
        <Styled.Header>
          {renderOperationItem(header)}
          <Styled.SettingButton icon={Icons.setting} onClick={onShowSettings} type="button" />
        </Styled.Header>
        <Styled.Body>{renderOperationItem(body)}</Styled.Body>
      </Styled.Operation>
      <DropDown isOpened={showSettings}>
        <OperationSetting />
      </DropDown>
    </>
  );
};

export default memo(Operation);
