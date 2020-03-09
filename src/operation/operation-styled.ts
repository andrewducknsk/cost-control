import styled from 'styled-components';

interface ISettingButton {
  readonly icon: string;
}

const OperationStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: -20px;
  margin-left: -20px;
  padding: 15px 20px;
  border-top: 1px solid mediumpurple;
  transition: background ease 0.15s;

  &:last-of-type {
    border-bottom: 1px solid mediumpurple;
  }

  &:hover {
    background: rgba(146, 112, 219, 0.08);
  }
`;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextNameStyled = styled.p`
  font-size: 18px;
  line-height: 1.2;
`;

const BodyStyled = styled.div`
  margin-top: 15px;
`;

const SettingButtonStyled = styled.button<ISettingButton>`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url(${props => props.icon}) center no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  outline: none;
  transition: transform ease 0.3s;

  &:hover {
    transform: rotate(90deg);
  }
`;

export default {
  Operation: OperationStyled,
  Header: HeaderStyled,
  TextName: TextNameStyled,
  Body: BodyStyled,
  SettingButton: SettingButtonStyled,
};
