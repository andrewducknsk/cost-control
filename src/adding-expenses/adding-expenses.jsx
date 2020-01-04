import React, { memo, useRef } from 'react';
import FormControl from '../form-control';
import { Select, TextInput } from '../controls';
import Form from '../form';

const AddingExpenses = () => {
	const formModel = useRef();

	const defaultData = {
		costName: {
			value: 'aaaa',
			old: 'sss',
		},
		costNames: {
			value: 'b',
		},
	};

	const onSend = e => {
		e.preventDefault();
	};

	return (
		<div className="">
			<Form defaultData={defaultData} formRef={formModel}>
				<form onSubmit={onSend}>
					<FormControl
						label="Название расхода"
						name="costName"
						control={TextInput}
						placeholder={'Например: Купил еды'}
					/>
					<FormControl label="Вид расхода" name="costNames" options={['a', 'b']} control={Select} />
					<button type="submit">Submit</button>
				</form>
			</Form>
		</div>
	);
};

export default memo(AddingExpenses);
