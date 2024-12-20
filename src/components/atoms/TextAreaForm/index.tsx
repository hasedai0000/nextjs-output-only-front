import { EventType } from '@/interfaces/Event';

import styles from './styles.module.css';

type TextAreaFormProps = {
  inputValue: string;
  placeholder?: string;
  onChange?: EventType['onChangeTextArea'];
  disabled?: boolean;
};

export const TextAreaForm = ({ inputValue, placeholder, onChange, disabled = false }: TextAreaFormProps) => {
  return (
    <textarea
      className={styles.text}
      placeholder={placeholder}
      value={inputValue}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
