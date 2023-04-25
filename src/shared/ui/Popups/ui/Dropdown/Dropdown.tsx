import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/popup.module.scss';

export interface DropdownItem {
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export const Dropdown = (props: DropdownProps) => {
  const {
    className,
    items,
    trigger,
    direction = 'bottom right'
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu
      as="div"
      className={classNames(cls.dropdown, {}, [className, popupCls.popup])}
    >
      <Menu.Button className={popupCls.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => ( // button ??
            <button
              className={classNames(cls.item, { [popupCls.active]: active })}
              onClick={item.onClick}
              type="button"
              disabled={item.disabled}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                disabled={item.disabled}
                as={AppLink}
                to={item.href}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item
              disabled={item.disabled}
              as={Fragment}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
