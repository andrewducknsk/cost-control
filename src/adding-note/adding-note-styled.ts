import styled from 'styled-components';
import FormControl from '../form-control';
import Styled from '../controls/button/button-styled';

const AddingNoteStyled = styled.section``;

const AddingNoteTitleStyled = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
`;

const AddingNoteFormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

const AddingNoteFormControlStyled = styled(FormControl)`
  margin-bottom: 15px;
`;

const AddingNoteButtonStyled = styled(Styled.Button)`
  align-self: flex-end;
`;

export default {
  AddingNote: AddingNoteStyled,
  Title: AddingNoteTitleStyled,
  Form: AddingNoteFormStyled,
  FormControl: AddingNoteFormControlStyled,
  Button: AddingNoteButtonStyled,
};
