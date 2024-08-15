import { addControlledForm } from '@/store/FormSlice';
import { useAppDispatch, useAppSelector } from '@/store/reduxHooks';
import { getCountriesSelector } from '@/store/selectors';
import { useState } from 'react';
import styles from '../UncontrolledForm/UncontrolledForm.module.scss';
import { useNavigate } from 'react-router-dom';

const ControlledForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mockCountries = useAppSelector(getCountriesSelector);

  const [nameValue, setNameValue] = useState('');
  const [ageValue, setAgeValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [genderValue, setGenderValue] = useState('male');
  const [agreementValue, setAgreementValue] = useState(false);
  const [imageValue, setImageValue] = useState('');
  const [countryValue, setCountryValue] = useState('');

  const submit = () => {
    dispatch(
      addControlledForm({
        name: nameValue,
        age: +ageValue,
        email: emailValue,
        password: passwordValue,
        gender: genderValue,
        agreement: agreementValue,
        image: imageValue,
        country: countryValue,
      }),
    );
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h1>Controlled Form</h1>
        <label className={styles.label}>
          Name
          <input
            type="text"
            value={nameValue}
            className={styles.textInput}
            onChange={(e) => {
              setNameValue(e.target.value);
            }}
          />
        </label>
        <label className={styles.label}>
          Age
          <input
            type="number"
            value={ageValue}
            className={styles.textInput}
            onChange={(e) => {
              setAgeValue(e.target.value);
            }}
          />
        </label>
        <label className={styles.label}>
          Email
          <input
            type="email"
            value={emailValue}
            className={styles.textInput}
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            type="password"
            value={passwordValue}
            className={styles.textInput}
            onChange={(e) => {
              setPasswordValue(e.target.value);
            }}
          />
        </label>
        <label className={styles.label}>
          Confirm password
          <input
            type="password"
            value={confirmPasswordValue}
            className={styles.textInput}
            onChange={(e) => {
              setConfirmPasswordValue(e.target.value);
            }}
          />
        </label>
        <label className={styles.label}>
          Gender
          <select
            value={genderValue}
            className={styles.textInput}
            onChange={(e) => {
              setGenderValue(e.target.value);
            }}
          >
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
            checked={agreementValue}
            className={styles.checkbox}
            onChange={(e) => {
              setAgreementValue(e.target.checked);
            }}
          />
        </label>
        <label className={styles.label}>
          Image upload
          <input
            type="file"
            value={imageValue}
            onChange={(e) => {
              setImageValue(e.target.value);
            }}
          />
        </label>
        <label className={styles.label}>
          Country
          <input
            type="text"
            value={countryValue}
            onChange={(e) => setCountryValue(e.target.value)}
            className={styles.textInput}
          />
          <div className={styles.dropdownMenu}>
            {mockCountries
              .filter((item) => {
                const searchQuery = countryValue.toLowerCase() || '';
                const country = item.country.toLowerCase();

                return (
                  countryValue &&
                  country.startsWith(searchQuery) &&
                  country !== searchQuery
                );
              })
              .map((option) => {
                return (
                  <div
                    className={styles.dropdownOption}
                    onClick={() => {
                      setCountryValue(option.country);
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

export default ControlledForm;
