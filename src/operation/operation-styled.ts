import styled from 'styled-components';

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

export default {
  Operation: OperationStyled,
  Header: HeaderStyled,
  TextName: TextNameStyled,
  Body: BodyStyled,
};
