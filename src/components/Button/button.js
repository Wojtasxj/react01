import styles from './Button.module.scss';

const Button = text => {
    return <Button className={styles.button} type="button">{text}</Button>;
}

export default Button;