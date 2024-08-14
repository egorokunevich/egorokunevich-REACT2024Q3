import { RootState } from '.';

export const getFormDataSelector = (store: RootState) =>
  store.formReducer.formData;
