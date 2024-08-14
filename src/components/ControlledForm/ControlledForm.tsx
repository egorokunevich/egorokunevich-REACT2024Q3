import { setForm } from '@/store/FormSlice';
import { useAppDispatch, useAppSelector } from '@/store/reduxHooks';
import { getFormDataSelector } from '@/store/selectors';
import { useState } from 'react';

const ControlledForm = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useAppDispatch();
  const savedForm = useAppSelector(getFormDataSelector);

  const handleInput = (txt: string) => {
    setInputText(txt);
    dispatch(setForm({ ...savedForm, name: txt }));
  };

  return (
    <>
      <h1>Controlled Form</h1>
      <input
        type="text"
        onChange={(e) => {
          const txt = e.target.value;
          handleInput(txt);
        }}
        value={inputText}
      />
    </>
  );
};

export default ControlledForm;
