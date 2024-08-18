import { mockCountries } from '@/mocks/mockCountries';
import * as yup from 'yup';

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required')
    .test('uppercase', 'First letter should be in upper case', (str) => {
      return !!str && str[0] === str[0].toUpperCase();
    }),
  age: yup
    .number()
    .typeError('Must be a number')
    .test('number', 'Must be 0 or more', (value) => {
      return value! >= 0;
    }),
  email: yup.string().required('Required').email('Must be like test@test.com'),
  password: yup
    .string()
    .required('Required')
    .test(
      'password',
      'Must contain 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character',
      (value) => {
        const regex =
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{1,}$/;
        return regex.test(value);
      },
    ),
  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),
  gender: yup.string().test('gender', 'Must be selected', (value) => {
    return value?.toLowerCase() === 'male' || value?.toLowerCase() === 'female';
  }),
  agreement: yup.boolean().required('Required').oneOf([true], 'Accept T&C'),
  image: yup
    .mixed<FileList>()
    .required('Required')
    .test('fileFormat', 'Use PNG or JPEG files', (fileList) => {
      if (fileList.length !== 0) {
        const allowedExtensions = ['png', 'jpeg'];
        return allowedExtensions.includes(
          fileList[0].name.split('.').pop() || 'null',
        );
      }
      return false;
    })
    .test('fileSize', 'File should be <= 1MB', (fileList) => {
      if (fileList.length !== 0) {
        return fileList[0].size <= 1_000_000;
      }
      return false;
    }),
  country: yup
    .string()
    .required('Required')
    .test('matchWithList', 'Must match with suggested countries', (value) => {
      const countries = mockCountries.map((item) => {
        return item.country;
      });
      return countries.includes(value);
    }),
});
