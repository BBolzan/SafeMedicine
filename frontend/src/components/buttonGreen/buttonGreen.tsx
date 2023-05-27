import { Link } from 'react-router-dom';
import styles from './buttonGreen.module.scss';

// interface ButtonGreenProps {
//   label: string;
//   step: string;
//   onClick: () => void;
// }

export const ButtonGreen = ({ label, step, onClick }: any) => {
  return (
    <>
      {step == 'sintomas' && (
        <Link
          to='/diagnostico'
          style={{ textDecoration: 'none', width: '100%' }}
        >
          <button className={styles.button}>{label}</button>
        </Link>
      )}

      {step == 'diagnostico' && (
        <Link to='/resposta' style={{ textDecoration: 'none', width: '100%' }}>
          <button className={styles.button} onClick={onClick}>
            {label}
          </button>
        </Link>
      )}
      {step == 'final' && (
        <Link to='/' style={{ textDecoration: 'none', width: '100%' }}>
          <button className={styles.button} onClick={onClick}>
            {label}
          </button>
        </Link>
      )}
    </>
  );
};
