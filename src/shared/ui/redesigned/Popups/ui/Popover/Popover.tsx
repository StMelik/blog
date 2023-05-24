import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

export interface PopoverItem {
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

interface PopoverProps {
  className?: string;
  /**
   * Кнопка открывания
   */
  trigger: ReactNode;
  /**
   * Направление отрывания
   */
  direction?: DropdownDirection;
  children: ReactNode;
  /**
   * Удалять из DOM при закрытии
   */
  unmountPanel?: boolean;
}

export const Popover = (props: PopoverProps) => {
  const {
    className,
    trigger,
    direction = 'bottom right',
    children,
    unmountPanel = true
  } = props;

  const menuClasses = [mapDirectionClass[direction], popupCls.menu];

  return (
    <HPopover
      className={classNames(cls.popover, {}, [className, popupCls.popup])}
    >
      <HPopover.Button
        className={popupCls.trigger}
        as='div'
      >
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        unmount={unmountPanel}
        className={classNames(cls.panel, {}, menuClasses)}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
