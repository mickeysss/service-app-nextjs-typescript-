import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import cn from 'classnames';
import ArrowIcon from 'assets/arrow.svg';
import styles from './index.module.css';

interface IButton
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'primary' | 'ghost';
    children: ReactNode;
    arrow?: 'right' | 'down' | 'none';
}

export const Button = ({ appearance, arrow = 'none', children, ...props }: IButton) => {
    return (
        <button
            className={cn(styles.button, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost',
            })}
            {...props}>
            {children}
            {arrow !== 'none' && (
                <span>
                    <ArrowIcon
                        className={cn(styles.arrow, {
                            [styles.right]: arrow === 'right',
                            [styles.down]: arrow === 'down',
                        })}
                    />
                </span>
            )}
        </button>
    );
};
