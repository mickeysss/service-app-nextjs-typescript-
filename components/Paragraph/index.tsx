import React, {ReactNode} from 'react';
import styles from './index.module.css'

interface IParagraph {
    size: 'small' | 'medium' | 'big'
    children: ReactNode
}

const Paragraph = ({size,children}: IParagraph) => {
    switch (size){
        case "small":
            return <p className={styles.small}>{children}</p>
        case "medium":
            return <p className={styles.medium}>{children}</p>
        case "big":
            return <p className={styles.big}>{children}</p>
    }
    return <p>{children}</p>;
};

export default Paragraph;