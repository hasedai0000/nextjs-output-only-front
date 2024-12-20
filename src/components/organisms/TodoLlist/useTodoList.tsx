/**
 * useTodoList
 *
 * @package components
 */

import { NAVIGATION_PATH } from '@/constants/navigation';
import { useRouter } from 'next/router';

type ActionsType = {
  handleMoveDetailPage: (id: number) => void;
  handleMoveEditPage: (id: number) => void;
};

/**
 * useTodoListTemplate
 */
export const useTodoList = () => {
  const router = useRouter();

  const handleMoveDetailPage = (id: number) => {
    router.push(`${NAVIGATION_PATH.DETAIL}${id}`);
  };

  const handleMoveEditPage = (id: number) => {
    router.push(`${NAVIGATION_PATH.EDIT}${id}`);
  };

  const actions: ActionsType = {
    handleMoveDetailPage,
    handleMoveEditPage,
  };

  return [actions] as const;
};
