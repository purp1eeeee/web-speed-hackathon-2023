import classNames from 'classnames';
import type { FC } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaShoppingCart, FaUser, FaPlay } from 'react-icons/fa';

import * as styles from './Icon.styles';

const icons = {
  FaArrowLeft,
  FaArrowRight,
  FaShoppingCart,
  FaUser,
  FaPlay,
  FaCheckCircle,
};

type Props = {
  type: keyof typeof icons;
  width: number;
  height: number;
  color: string;
};

export const Icon: FC<Props> = ({ color, height, type, width }) => {
  const Icon = icons[type];
  return (
    <span className={classNames(type, styles.container({ color, height, width }))}>
      <Icon />
    </span>
  );
};
