import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { HStack } from '../Stack';
import { Text } from '../Text';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'placeholder' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
  className?: string;
  /**
   * Значение инпута
   */
  value?: string | number;
  /**
   * Название инпута
   */
  label?: string | null;
  /**
   * Вызывается при изменении инпута
   */
  onChange?: (value: string) => void;
  /**
   * Автофокусировка инпута
   */
  autofocus?: boolean;
  /**
   * Надпись при отсутствии значения в инпуте
   */
  placeholder?: string | null;
  /**
   * Блокировка инпута
   */
  readonly?: boolean;
  /**
   * Дополнение слева от ввода
   */
  addonLeft?: ReactNode;
  /**
   * Дополнение справа от ввода
   */
  addonRight?: ReactNode;
  /**
   * Высота инпута
   */
  size?: InputSize;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder = '',
    label,
    autofocus,
    readonly = false,
    addonLeft,
    addonRight,
    size = 'm',
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocused = () => {
    setIsFocused(true);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight)
  };

  const input = (
    <div className={classNames(cls.inputWrapper, mods, [className, cls[size]])}>
      {Boolean(addonLeft) && <div className={cls.addonLeft}>{addonLeft}</div>}
      <input
        ref={ref}
        className={cls.input}
        type={type}
        value={value}
        onChange={handleChangeInput}
        onBlur={handleBlur}
        onFocus={handleFocused}
        readOnly={readonly}
        placeholder={placeholder!}
        {...otherProps}
      />
      {Boolean(addonRight) && (
        <div className={cls.addonRight}>{addonRight}</div>
      )}
    </div>
  );

  if (label) {
    return (
      <HStack
        max
        gap='8'
      >
        <Text text={label} />
        {input}
      </HStack>
    );
  }

  return input;
});
