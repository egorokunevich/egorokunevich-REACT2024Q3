import { addControlledForm } from '@/store/FormSlice';
import { useAppDispatch, useAppSelector } from '@/store/reduxHooks';
import { getControlledFormSelector } from '@/store/selectors';
import { useState } from 'react';

const ControlledForm = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useAppDispatch();
  const savedForm = useAppSelector(getControlledFormSelector);

  const handleInput = (txt: string) => {
    setInputText(txt);
    dispatch(addControlledForm({ ...savedForm[0], name: txt }));
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
