import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'placeholder' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  placeholder?: string | null;
  readonly?: boolean;
}

/**
 * @deprecated
 */
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly = false,
    ...oterProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const isCaretVisible = isFocused && !readonly;

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

  const mods: Mods = {
    [cls.readonly]: readonly
  };

  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
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
          readOnly={readonly}
          {...oterProps}
        />

        {isCaretVisible && (
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
