import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormSliceData {
  name: string;
}

interface FormsSliceInitialState {
  formData: FormSliceData;
}

const initialState: FormsSliceInitialState = {
  formData: {
    name: 'John Doe',
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
