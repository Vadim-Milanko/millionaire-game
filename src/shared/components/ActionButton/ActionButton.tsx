import styles from './ActionButton.module.css';

interface ActionButtonProps {
  title: string;
  onBtnClick: () => void;
}

export default function ActionButton(props: ActionButtonProps) {
  const { title, onBtnClick } = props;

  return (
    <button className={styles.button} onClick={onBtnClick}>
      {title}
    </button>
  );
}
