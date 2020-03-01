import styled from 'styled-components';
import ButtonStyled from '../controls/button/button-styled';

const HistoryStyled = styled.section`
  display: flex;
  flex-direction: column;
`;

const HistoryHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const HistoryTitleStyled = styled.h2``;

const HistoryEmptyMessageStyled = styled.div`
  margin-top: 25px;
`;

const HistoryButtonStyled = styled(ButtonStyled.Button)`
  position: fixed;
  bottom: 15px;
  left: 50%;
  width: 280px;
  margin-left: -160px;
`;

export default {
  History: HistoryStyled,
  Title: HistoryTitleStyled,
  Header: HistoryHeaderStyled,
  EmptyMessage: HistoryEmptyMessageStyled,
  Button: HistoryButtonStyled,
};
