import React, { memo, useContext, useRef } from 'react';
import { DateInput, NumberInput, Select, TextInput } from '../controls';
import Form from '../form';
import CoreContext from '../core/core-context';
import Styled from './adding-note-styled';
import { actionTypes } from '../store/actions';
import { useCustomDispatch } from '../hooks';
import { dateFromFuture, maxLength, pattern } from '../validators';
import require from '../validators/require';

const AddingNote: React.FunctionComponent = (): JSX.Element => {
  const { addingNote } = useContext(CoreContext);
  const formModel = useRef();
  const postNote = useCustomDispatch();

  const defaultData = {
    expenseName: {
      value: 'aas',
      validators: [
        maxLength({
          length: 12,
        }),
        pattern({
          pattern: /[<>'"/]/,
          message: 'Используются запрещенные символы <>\'"/',
        }),
      ],
    },
    expenseDate: {
      value: '2020-01-15',
      validators: [dateFromFuture(), require()],
    },
    expenseAmount: {
      value: 200,
      validators: [require()],
    },
  };

  const onSend = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // @ts-ignore
    const { getValues, isValid } = formModel.current;

    if (isValid()) {
      return;
    }

    const formValues: { [key: string]: string } = getValues();

    postNote(actionTypes.POST_NOTE, formValues);
  };

  return (
    <Styled.AddingNote>
      <Styled.Title>{addingNote.title}</Styled.Title>
      <Form defaultData={defaultData} formRef={formModel}>
        <Styled.Form onSubmit={onSend}>
          <Styled.FormControl
            label={addingNote.expenseNameLabel}
            name="expenseName"
            control={TextInput}
            placeholder={addingNote.expenseNamePlaceholder}
          />
          <Styled.FormControl
            label={addingNote.expenseTypeLabel}
            name="expenseType"
            options={['a', 'b']}
            control={Select}
          />
          <Styled.FormControl
            label={addingNote.expenseDateLabel}
            name="expenseDate"
            control={DateInput}
          />
          <Styled.FormControl
            label={addingNote.expenseAmountLabel}
            name="expenseAmount"
            placeholder={addingNote.expenseAmountPlaceholder}
            control={NumberInput}
          />
          <Styled.Button type="submit">{addingNote.buttonLabel}</Styled.Button>
        </Styled.Form>
      </Form>
    </Styled.AddingNote>
  );
};

export default memo(AddingNote);