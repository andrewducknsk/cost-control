import React, { memo, useContext, useRef } from 'react';
import { Select, TextInput } from '../controls';
import Form from '../form';
import CoreContext from '../core/core-context';
import Styled from './adding-expenses-styled';

const AddingExpenses = () => {
	const { addingExpenses } = useContext(CoreContext);
	const formModel = useRef();

	const defaultData = {
		expenseName: {
			value: 'aaaa',
			old: 'sss',
		},
		expenseType: {
			value: 'b',
		},
	};

	const onSend = e => {
		e.preventDefault();
	};

	return (
		<Styled.AddingExpenses>
			<Styled.Title>Добавь свой расход</Styled.Title>
			<Form defaultData={defaultData} formRef={formModel}>
				<Styled.Form onSubmit={onSend}>
					<Styled.FormControl
						label={addingExpenses.expenseNameLabel}
						name="expenseName"
						control={TextInput}
						placeholder={addingExpenses.expenseNamePlaceholder}
					/>
					<Styled.FormControl
						label={addingExpenses.expenseTypeLabel}
						name="expenseType"
						options={['a', 'b']}
						control={Select}
					/>
					<Styled.Button type="submit">{addingExpenses.buttonLabel}</Styled.Button>
				</Styled.Form>
			</Form>
		</Styled.AddingExpenses>
	);
};

export default memo(AddingExpenses);
