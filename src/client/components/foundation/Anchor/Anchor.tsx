import type { ComponentProps, FC } from 'react';
import { Link } from 'react-router-dom';

import * as styles from './Anchor.styles';

type Props = Pick<ComponentProps<'a'>, 'href' | 'children'>;

export const Anchor: FC<Props> = ({ children, href }) => (
  <Link style={{ textDecoration: 'none' }} to={href ?? ''}>
    {children}
  </Link>
);
