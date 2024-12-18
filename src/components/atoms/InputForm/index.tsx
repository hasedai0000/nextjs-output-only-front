import { EventType } from '@/interfaces/Event';

import styles from './styles.module.css';

type InputFormProps = {
  inputValue: string;
  placeholder: string;
  onChange: EventType['onChangeInput'];
  disabled?: boolean;
};

export const InputForm = ({ inputValue, placeholder, onChange, disabled = false }: InputFormProps) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
