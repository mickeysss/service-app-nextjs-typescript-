import React, { ReactNode } from 'react';
import styles from './index.module.css';
import cn from 'classnames';

interface IParagraph {
    size: 'small' | 'medium' | 'large';
    children: ReactNode;
}

export const Paragraph = ({ size, children }: IParagraph) => {
    return (
        <p
            className={cn(styles.paragraph, {
                [styles.small]: size === 'small',
                [styles.medium]: size === 'medium',
                [styles.big]: size === 'large',
            })}>
            {children}
        </p>
    );
};
