import { setForm } from '@/store/FormSlice';
import { useAppDispatch } from '@/store/reduxHooks';
import { useState } from 'react';

const ControlledForm = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useAppDispatch();

  const handleInput = (txt: string) => {
    setInputText(txt);
    dispatch(setForm({ name: txt }));
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
