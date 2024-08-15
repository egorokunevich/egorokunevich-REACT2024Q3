import { RootState } from '.';

export const getControlledFormSelector = (store: RootState) =>
  store.formReducer.controlledForms;

export const getUncontrolledFormSelector = (store: RootState) =>
  store.formReducer.uncontrolledForms;

export const getCountriesSelector = (store: RootState) =>
  store.formReducer.countries;
