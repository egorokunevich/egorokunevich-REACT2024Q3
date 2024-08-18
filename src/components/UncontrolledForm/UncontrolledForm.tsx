import { useRef, useState } from 'react';
import styles from './UncontrolledForm.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/reduxHooks';
import { addUncontrolledForm, IImage } from '@/store/FormSlice';
import { useNavigate } from 'react-router-dom';
import { getCountriesSelector } from '@/store/selectors';
import { getBase64String } from '@/utils/getBase64String';
import { formSchema } from '@/validations/formValidation';
import { ValidationError } from 'yup';
import PasswordStrengthIndicator from '../PowerStrengthIndicator';

const UncontrolledForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mockCountries = useAppSelector(getCountriesSelector);

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const agreementRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  const [imageValue, setImageValue] = useState({} as IImage);
  const [imageFiles, setImageFiles] = useState({} as FileList);
  const [errors, setErrors] = useState([] as ValidationError[]);

  const handleSubmit = async () => {
    const data = {
      name: nameRef.current?.value || '',
      age: +(ageRef.current?.value || ''),
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      gender: genderRef.current?.value || '',
      agreement: agreementRef.current?.checked ? true : false,
      image: imageValue,
      country: countryRef.current?.value || '',
    };

    const validationData = {
      ...data,
      image: imageFiles,
      confirmPassword: confirmPasswordRef.current?.value || '',
    };
    const form = await formSchema
      .validate(validationData, { abortEarly: false })
      .catch((e: ValidationError) => {
        setErrors(e.inner);
      });

    if (form) {
      dispatch(addUncontrolledForm(data));
      navigate('/');
    }
  };

  const handleError = (fieldName: string) => {
    const error = errors.find((item) => item.path === fieldName);
    if (error) {
      return (
        <p className={styles.errorMessage + ' ' + styles.activeError}>
          {error.message}
        </p>
      );
    }
    return <p className={styles.errorMessage}></p>;
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h1>Uncontrolled Form</h1>
        <label className={styles.label}>
          Name
          <input type="text" ref={nameRef} className={styles.textInput} />
          {handleError('name')}
        </label>
        <label className={styles.label}>
          Age
          <input type="number" ref={ageRef} className={styles.textInput} />
          {handleError('age')}
        </label>
        <label className={styles.label}>
          Email
          <input type="text" ref={emailRef} className={styles.textInput} />
          {handleError('email')}
        </label>
        <label className={styles.label}>
          Password
          <input
            type="password"
            ref={passwordRef}
            className={styles.textInput}
            autoComplete="on"
          />
          <PasswordStrengthIndicator
            password={passwordRef.current?.value || ''}
          />
          {handleError('password')}
        </label>
        <label className={styles.label}>
          Confirm password
          <input
            type="password"
            ref={confirmPasswordRef}
            className={styles.textInput}
            autoComplete="on"
          />
          {handleError('confirmPassword')}
        </label>
        <label className={styles.label}>
          Gender
          <select ref={genderRef} className={styles.textInput}>
            <option value="male" defaultChecked>
              Male
            </option>
            <option value="female">Female</option>
          </select>
          {handleError('gender')}
        </label>
        <label className={styles.label}>
          Terms and Conditions agreement
          <input
            type="checkbox"
            ref={agreementRef}
            className={styles.checkbox}
          />
          {handleError('agreement')}
        </label>
        <label className={styles.label}>
          Image upload
          <input
            type="file"
            ref={imageRef}
            onChange={async (e) => {
              if (e.target.files && e.target.files[0]) {
                const baseString = await getBase64String(e.target.files[0]);
                setImageValue({
                  base64: baseString as string,
                  file: e.target.files[0],
                });
                setImageFiles(e.target.files);
              }
            }}
          />
          {handleError('image')}
        </label>
        <label className={styles.label}>
          Country
          <input
            type="text"
            list="countryList"
            ref={countryRef}
            className={styles.textInput}
          />
          <datalist id="countryList">
            {mockCountries.map((item) => {
              return <option key={item.country}>{item.country}</option>;
            })}
          </datalist>
          {handleError('country')}
        </label>
        <button
          className={styles.formBtn}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          ref={submitRef}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
