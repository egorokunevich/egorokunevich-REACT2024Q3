import { addControlledForm, IImage } from '@/store/FormSlice';
import { useAppDispatch, useAppSelector } from '@/store/reduxHooks';
import { getCountriesSelector } from '@/store/selectors';
import { useState } from 'react';
import styles from '../UncontrolledForm/UncontrolledForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '@/validations/formValidation';
import { getBase64String } from '@/utils/getBase64String';

interface FormData {
  name: string;
  age?: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender?: string;
  agreement: boolean;
  image: string;
  country: string;
}

const ControlledForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mockCountries = useAppSelector(getCountriesSelector);

  const [imageValue, setImageValue] = useState({} as IImage);

  const { handleSubmit, formState, control } = useForm({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const submit = (data: FormData) => {
    dispatch(
      addControlledForm({
        name: data.name,
        age: data.age || 0,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        gender: data.gender || 'none',
        agreement: data.agreement,
        image: imageValue,
        country: data.country,
      }),
    );
    navigate('/');
  };

  const { errors } = formState;

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => {
          submit(data as unknown as FormData);
        })}
      >
        <h1>Controlled Form</h1>
        <label className={styles.label}>
          Name
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input {...field} className={styles.textInput} />
            )}
          />
          {errors.name && (
            <p className={styles.errorMessage}>{errors.name?.message}</p>
          )}
        </label>
        <label className={styles.label}>
          Age
          <Controller
            name="age"
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <input {...field} className={styles.textInput} />
            )}
          />
          <p className={styles.errorMessage}>{errors.age?.message}</p>
        </label>
        <label className={styles.label}>
          Email
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input {...field} className={styles.textInput} />
            )}
          />
          <p className={styles.errorMessage}>{errors.email?.message}</p>
        </label>
        <label className={styles.label}>
          Password aA1!
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="password"
                className={styles.textInput}
                autoComplete="on"
              />
            )}
          />
          <p className={styles.errorMessage}>{errors.password?.message}</p>
        </label>
        <label className={styles.label}>
          Confirm password
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="password"
                className={styles.textInput}
                autoComplete="on"
              />
            )}
          />
          <p className={styles.errorMessage}>
            {errors.confirmPassword?.message}
          </p>
        </label>
        <label className={styles.label}>
          Gender
          <Controller
            name="gender"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select {...field} className={styles.textInput}>
                <option value="" defaultChecked disabled>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            )}
          />
          <p className={styles.errorMessage}>{errors.gender?.message}</p>
        </label>
        <label className={styles.label}>
          Terms and Conditions agreement
          <Controller
            name="agreement"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <input
                type="checkbox"
                onBlur={onBlur}
                className={styles.checkbox}
                onChange={(e) => onChange(e.target.checked)}
                checked={value}
                ref={ref}
              />
            )}
          />
          <p className={styles.errorMessage}>{errors.agreement?.message}</p>
        </label>
        <label className={styles.label}>
          Image upload
          <Controller
            name="image"
            control={control}
            defaultValue={undefined}
            render={({ field: { onChange, onBlur } }) => (
              <input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const files = e.target.files;
                  onChange(files);
                  if (e.target.files && e.target.files[0]) {
                    const baseString = await getBase64String(e.target.files[0]);
                    setImageValue({
                      base64: baseString as string,
                      file: e.target.files[0],
                    });
                  }
                }}
                onBlur={onBlur}
              />
            )}
          />
          {errors.image && (
            <p className={styles.errorMessage}>{errors.image?.message}</p>
          )}
        </label>
        <label className={styles.label}>
          Country
          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <input
                  {...field}
                  list="countryList"
                  className={styles.textInput}
                  autoComplete="on"
                />
                <datalist id="countryList">
                  {mockCountries.map((item) => {
                    return <option key={item.country}>{item.country}</option>;
                  })}
                </datalist>
              </>
            )}
          />
          <p className={styles.errorMessage}>{errors.country?.message}</p>
        </label>
        <button className={styles.formBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ControlledForm;
