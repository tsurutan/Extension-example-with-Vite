import React, {HTMLAttributes} from "react";
import styles from './Button.module.scss';

const Button: React.FC<HTMLAttributes<HTMLButtonElement>> = (props) => (<button {...props} className={styles.button} />);

export default Button;
