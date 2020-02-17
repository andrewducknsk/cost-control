import styled from 'styled-components';

const HistoryItemStyled = styled.div`
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

const HistoryHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HistoryTextNameStyled = styled.p`
  font-size: 18px;
  line-height: 1.2;
`;

const HistoryBodyStyled = styled.div`
  margin-top: 15px;
`;

export default {
  HistoryItem: HistoryItemStyled,
  Header: HistoryHeaderStyled,
  TextName: HistoryTextNameStyled,
  Body: HistoryBodyStyled,
};
