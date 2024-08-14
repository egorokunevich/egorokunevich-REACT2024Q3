import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormSliceData {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: 'male' | 'female';
  image: string;
  country: 'Belarus' | 'Ukraine';
}

interface FormsSliceInitialState {
  formData: FormSliceData;
}

const initialState: FormsSliceInitialState = {
  formData: {
    name: 'John Doe',
    age: 25,
    email: 'test@test.com',
    password: 'qwerty123',
    gender: 'male',
    image: '',
    country: 'Belarus',
  },
};

const FormSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<FormSliceData>) => {
      state.formData = action.payload;
    },
  },
});

export const { setForm } = FormSlice.actions;

export default FormSlice.reducer;
