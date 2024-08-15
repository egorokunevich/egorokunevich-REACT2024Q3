import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormSliceData {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  agreement: boolean;
  image: string;
  country: string;
}

interface FormsSliceInitialState {
  controlledForms: FormSliceData[];
  uncontrolledForms: FormSliceData[];
}

const initialState: FormsSliceInitialState = {
  controlledForms: [
    {
      name: 'John Doe',
      age: 25,
      email: 'test@test.com',
      password: 'qwerty123',
      gender: 'male',
      agreement: false,
      image: '',
      country: 'Belarus',
    },
  ],
  uncontrolledForms: [
    {
      name: 'John Doe',
      age: 25,
      email: 'test@test.com',
      password: 'qwerty123',
      gender: 'male',
      agreement: false,
      image: '',
      country: 'Belarus',
    },
  ],
};

const FormSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addControlledForm: (state, action: PayloadAction<FormSliceData>) => {
      state.controlledForms.push(action.payload);
    },
    addUncontrolledForm: (state, action: PayloadAction<FormSliceData>) => {
      state.uncontrolledForms.push(action.payload);
    },
  },
});

export const { addControlledForm, addUncontrolledForm } = FormSlice.actions;

export default FormSlice.reducer;
