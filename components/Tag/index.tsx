import React, { ReactNode } from 'react';
import styles from './index.module.css';
import cn from 'classnames';

interface ITag {
 size: 's' | 'm' | 'l';
 color?: 'ghost' | 'danger' | 'primary';
 children: ReactNode;
}

export const Tag = ({ size, color, children }: ITag) => {
 return (
  <div
   className={cn(styles.tag, {
    [styles.small]: size === 's',
    [styles.medium]: size === 'm',
    [styles.large]: size === 'l',
    [styles.ghost]: color === 'ghost',
    [styles.primary]: color === 'primary',
    [styles.danger]: color === 'danger',
   })}>
   {children}
  </div>
 );
};
