import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { typedMemo } from '@/shared/types';
import { ChangeEvent, useCallback, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string | null;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

/**
 * @deprecated
 */
export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, onChange, readonly } = props;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value as T);
    },
    [onChange]
  );

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option
          className={cls.option}
          value={opt.value}
          key={opt.value}
        >
          {opt.content}
        </option>
      )),
    [options]
  );

  const mods: Mods = {
    [cls.readonly]: readonly
  };

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        className={cls.select}
        value={value}
        onChange={handleChange}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
});
