import styled from 'styled-components';
import FormControl from '../form-control';
import Styled from '../controls/button-styled';

const AddingExpensesStyled = styled.section``;

const AddingExpensesTitleStyled = styled.h3`
	margin-bottom: 20px;
	font-size: 18px;
	font-weight: 400;
	line-height: 1.2;
`;

const AddingExpensesFormStyled = styled.form`
	display: flex;
	flex-direction: column;
`;

const AddingExpensesFormControlStyled = styled(FormControl)`
	margin-bottom: 15px;
`;

const AddingExpensesButtonStyled = styled(Styled.Button)`
	align-self: flex-end;
`;

export default {
	AddingExpenses: AddingExpensesStyled,
	Title: AddingExpensesTitleStyled,
	Form: AddingExpensesFormStyled,
	FormControl: AddingExpensesFormControlStyled,
	Button: AddingExpensesButtonStyled,
};
