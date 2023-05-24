import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';
import { Button } from '../../../Button';
import { Icon } from '../../../Icon';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';

export interface ListBoxItem<T extends string> {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  className?: string;
  /**
   * Элементы ListBox
   */
  items?: ListBoxItem<T>[];
  /**
   * Выбранный элемент
   */
  value?: T;
  /**
   * Отображать если не выбран элемент
   */
  defaultValue?: string | null;
  /**
   * Вызывается при выборе элемента
   */
  onChange: (value: T) => void;
  /**
   * Блокирует ListBox
   */
  readonly?: boolean;
  /**
   * Направление отрывания списка
   */
  direction?: DropdownDirection;
  /**
   * Название ListBox (надпись слева)
   */
  label?: string | null;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    label,
    direction = 'bottom right'
  } = props;

  const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

  const selectedItem = useMemo(
    () => items?.find((item) => item.value === value),
    [items, value]
  );

  return (
    <HStack gap='4'>
      {label && (
        <span className={classNames('', { [popupCls.disabled]: readonly })}>
          {`${label}:`}
        </span>
      )}

      <HListBox
        as='div'
        className={classNames(cls.listBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button
          className={popupCls.trigger}
          as='div'
        >
          <Button
            variant='filled'
            disabled={readonly}
            addonRight={<Icon Svg={ArrowIcon} />}
          >
            {selectedItem?.content || defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              as={Fragment}
              value={item.value}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                    [popupCls.disabled]: item.disabled,
                    [popupCls.selected]: selected
                  })}
                >
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
