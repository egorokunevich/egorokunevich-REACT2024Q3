import { useEffect, useState } from 'react';
import styles from './PasswordStrengthIndicator.module.scss';

interface PasswordStrengthIndicatorProps {
  password: string;
}

const PasswordStrengthIndicator = ({
  password,
}: PasswordStrengthIndicatorProps) => {
  const [strengthValue, setStrengthValue] = useState(0);

  useEffect(() => {
    const upperCaseRegexp = /^(?=.*?[A-Z]).{1,}$/;
    const lowerCaseRegexp = /^(?=.*?[a-z]).{1,}$/;
    const digitCaseRegexp = /^(?=.*?[0-9]).{1,}$/;
    const specialCaseRegexp = /^(?=.*?[#?!@$%^&*-]).{1,}$/;
    const strength = [];
    strength.push(upperCaseRegexp.test(password));
    strength.push(lowerCaseRegexp.test(password));
    strength.push(digitCaseRegexp.test(password));
    strength.push(specialCaseRegexp.test(password));

    setStrengthValue(strength.filter((item) => item === true).length);
  }, [password]);

  const getPasswordRank = () => {
    switch (strengthValue) {
      case 1:
        return 'Weak';
      case 2:
        return 'Normal';
      case 3:
        return 'Good';
      case 4:
        return 'Perfect!';
      default:
        return 'Start typing';
    }
  };

  const getIndicatorColor = () => {
    switch (strengthValue) {
      case 1:
        return 'red';
      case 2:
        return '#fcb603';
      case 3:
        return '#c3d12c';
      case 4:
        return '#03fc4e';
      default:
        return 'red';
    }
  };

  return (
    <div>
      <div className={styles.rankContainer}>
        <div>Password strength:</div>
        <div>{getPasswordRank()}</div>
      </div>
      <div className={styles.container}>
        <div
          className={styles.indicator}
          style={{
            width: `${strengthValue * 25}%`,
            backgroundColor: `${getIndicatorColor()}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;
