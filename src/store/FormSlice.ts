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
  controlledForms: [],
  uncontrolledForms: [],
};

const FormSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addControlledForm: (state, action: PayloadAction<FormSliceData>) => {
      state.controlledForms.unshift(action.payload);
    },
    addUncontrolledForm: (state, action: PayloadAction<FormSliceData>) => {
      state.uncontrolledForms.unshift(action.payload);
    },
  },
});

export const { addControlledForm, addUncontrolledForm } = FormSlice.actions;

export default FormSlice.reducer;
