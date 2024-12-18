import { NAVIGATION_LIST } from '@/constants/navigation';
import styles from './styles.module.css';
import { NavigationLink } from '@/components/atoms/NavigationLink';

export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <NavigationLink linkPath={NAVIGATION_LIST.TOP} title="Top" />
        <NavigationLink linkPath={NAVIGATION_LIST.CREATE} title="Create" />
      </ul>
    </nav>
  );
};
