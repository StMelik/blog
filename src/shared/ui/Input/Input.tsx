import {
  ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef, useState
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean,
  placeholder?: string | null
}

export const Input: FC<InputProps> = memo(({
  className,
  value,
  onChange,
  type = 'text',
  placeholder,
  autofocus,
  ...oterProps
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocused = () => {
    setIsFocused(true);
  };

  const handleSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart);
  };

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          className={cls.input}
          type={type}
          value={value}
          onChange={handleChangeInput}
          onBlur={handleBlur}
          onFocus={handleFocused}
          onSelect={handleSelect}
          {...oterProps}
        />

        {isFocused && (
          <span
            style={{
              left: `${caretPosition * 9}px`
            }}
            className={cls.caret}
          />
        )}
      </div>
    </div>
  );
});
