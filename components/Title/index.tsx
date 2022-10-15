import React, { ReactNode } from 'react';
import styles from './index.module.css';

interface ITitle {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
}

export const Title = ({ tag, children }: ITitle) => {
    switch (tag) {
        case 'h1':
            return <h1 className={styles.h1}>{children}</h1>;
        case 'h2':
            return <h2 className={styles.h2}>{children}</h2>;
        case 'h3':
            return <h3 className={styles.h3}>{children}</h3>;
        default:
            return <></>;
    }
};
