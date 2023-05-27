import { ButtonWhite } from '../button/buttonWhite';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <ButtonWhite label='Home' />
    </div>
  );
};
