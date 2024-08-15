import { useRef, useState } from 'react';
import styles from './UncontrolledForm.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/reduxHooks';
import { addUncontrolledForm } from '@/store/FormSlice';
import { useNavigate } from 'react-router-dom';
import { getCountriesSelector } from '@/store/selectors';

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
  const [countryInputText, setCountryInputText] = useState('');

  const submit = () => {
    dispatch(
      addUncontrolledForm({
        name: nameRef.current?.value || '',
        age: +(ageRef.current?.value || ''),
        email: emailRef.current?.value || '',
        password: passwordRef.current?.value || '',
        gender: genderRef.current?.value || '',
        agreement: agreementRef.current?.checked ? true : false,
        image: imageRef.current?.value || '',
        country: countryRef.current?.value || '',
      }),
    );
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h1>Uncontrolled Form</h1>
        <label className={styles.label}>
          Name
          <input type="text" ref={nameRef} className={styles.textInput} />
        </label>
        <label className={styles.label}>
          Age
          <input type="number" ref={ageRef} className={styles.textInput} />
        </label>
        <label className={styles.label}>
          Email
          <input type="email" ref={emailRef} className={styles.textInput} />
        </label>
        <label className={styles.label}>
          Password
          <input
            type="password"
            ref={passwordRef}
            className={styles.textInput}
          />
        </label>
        <label className={styles.label}>
          Confirm password
          <input
            type="password"
            ref={confirmPasswordRef}
            className={styles.textInput}
          />
        </label>
        <label className={styles.label}>
          Gender
          <select ref={genderRef} className={styles.textInput}>
            <option value="male" defaultChecked>
              Male
            </option>
            <option value="female">Female</option>
          </select>
        </label>
        <label className={styles.label}>
          Terms and Conditions agreement
          <input
            type="checkbox"
            ref={agreementRef}
            className={styles.checkbox}
          />
        </label>
        <label className={styles.label}>
          Image upload
          <input type="file" ref={imageRef} />
        </label>
        <label className={styles.label}>
          Country
          <input
            type="text"
            ref={countryRef}
            onChange={(e) => setCountryInputText(e.target.value)}
            className={styles.textInput}
          />
          <div className={styles.dropdownMenu}>
            {mockCountries
              .filter((item) => {
                const searchQuery = countryInputText.toLowerCase() || '';
                const country = item.country.toLowerCase();

                return (
                  countryInputText &&
                  country.startsWith(searchQuery) &&
                  country !== searchQuery
                );
              })
              .map((option) => {
                return (
                  <div
                    className={styles.dropdownOption}
                    onClick={() => {
                      setCountryInputText(option.country);
                      if (countryRef.current?.value) {
                        countryRef.current.value = option.country;
                      }
                    }}
                  >
                    {option.country}
                  </div>
                );
              })}
          </div>
        </label>
        <button
          className={styles.formBtn}
          onClick={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
