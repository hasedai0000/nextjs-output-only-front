/**
 * NavigationLink
 *
 * @package components
 */
import { FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

type Props = {
  title: string;
  linkPath: string;
};

/**
 * NavigationLink
 * @param title
 * @param linkPath
 * @constructor
 */
export const NavigationLink: FC<Props> = ({ linkPath, title }) => {
  return (
    <li className={styles.li}>
      <Link href={linkPath}>{title}</Link>
    </li>
  );
};
