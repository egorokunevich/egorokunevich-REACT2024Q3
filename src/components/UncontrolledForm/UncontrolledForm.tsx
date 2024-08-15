import { useRef } from 'react';
import styles from './UncontrolledForm.module.scss';
import { useAppDispatch } from '@/store/reduxHooks';
import { addUncontrolledForm } from '@/store/FormSlice';
import { useNavigate } from 'react-router-dom';

const UncontrolledForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const agreementRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

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
    <form className={styles.form}>
      <h1>Uncontrolled Form</h1>
      <label className={styles.label}>
        Name
        <input type="text" ref={nameRef} />
      </label>
      <label className={styles.label}>
        Age
        <input type="number" ref={ageRef} />
      </label>
      <label className={styles.label}>
        Email
        <input type="email" ref={emailRef} />
      </label>
      <label className={styles.label}>
        Password
        <input type="password" ref={passwordRef} />
      </label>
      <label className={styles.label}>
        Confirm password
        <input type="password" ref={confirmPasswordRef} />
      </label>
      <label className={styles.label}>
        Gender
        <select ref={genderRef}>
          <option value="male" defaultChecked>
            Male
          </option>
          <option value="female">Female</option>
        </select>
      </label>
      <label className={styles.label}>
        Terms and Conditions agreement
        <input type="checkbox" ref={agreementRef} />
      </label>
      <label className={styles.label}>
        Image upload
        <input type="file" ref={imageRef} />
      </label>
      <label className={styles.label}>
        Country
        <input type="text" ref={countryRef} autoComplete="country" />
      </label>
      <button
        onClick={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default UncontrolledForm;
