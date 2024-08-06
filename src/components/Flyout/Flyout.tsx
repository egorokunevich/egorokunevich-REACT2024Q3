'use client';

import { useAppDispatch } from '@/hooks/reduxHooks';
import Button from '@/components/Buttons/Button';
import styles from './Flyout.module.scss';
import btnStyles from '@/components/Buttons/Button/Button.module.scss';
import { unselectAllPokemons } from '@/store/pokemonsSlice';
import { Pokemon } from '@/api/reduxApi';

interface FlyoutProps {
  selectedPokemons: Pokemon[];
}
type DownloadablePokemon = Omit<Pokemon, 'sprites'>;

const convertToCSV = (rawData: Pokemon[]) => {
  const data: DownloadablePokemon[] = rawData.map((item) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { sprites, ...newItem } = item;
    return newItem;
  });

  const headers = Object.keys(data[0]).toString();

  const mainData = data.map((item) => {
    return Object.values(item).filter((value) => {
      if (typeof value === 'string' || typeof value === 'number') {
        return value;
      }
    });
  });

  return [headers, ...mainData].join('\n');
};

const getDownloadLink = (data: string) => {
  const blob = new Blob([data], { type: 'application/csv' });

  const downloadURL = URL.createObjectURL(blob);

  return downloadURL;
};

const Flyout = ({ selectedPokemons }: FlyoutProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper} data-testid="flyout">
      <div className={styles.container}>
        <div className={styles.info}>
          Pokemons selected: {selectedPokemons.length}
        </div>

        <Button
          txt={'Unselect All'}
          onClick={() => dispatch(unselectAllPokemons())}
          data-testid="unselect-btn"
        />
        <a
          style={{ padding: '0.6em 1.2em', lineHeight: '1.15' }}
          className={btnStyles.btn}
          href={getDownloadLink(convertToCSV(selectedPokemons))}
          download={`${selectedPokemons.length}_pokemons.csv`}
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default Flyout;
