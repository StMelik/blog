import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotificationButton.module.scss';
import { memo, useCallback, useState } from 'react';
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { NotificationList } from '@/entities/Notification';

import NotificationsIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationsIcon from '@/shared/assets/icons/notification.svg';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { ToggleFeature } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <ToggleFeature
      feature='isAppRedesigned'
      on={
        <Icon
          Svg={NotificationsIcon}
          onClick={handleOpen}
          clickable
        />
      }
      off={
        <ButtonDeprecated
          theme={ButtonTheme.CLEAR}
          onClick={handleOpen}
        >
          <IconDeprecated
            Svg={NotificationsIconDeprecated}
            inverted
          />
        </ButtonDeprecated>
      }
    />
  );

  return (
    <>
      <BrowserView>
        <ToggleFeature
          feature='isAppRedesigned'
          on={
            <Popover
              className={classNames('', {}, [className])}
              direction='bottom left'
              unmountPanel={false}
              trigger={trigger}
            >
              <NotificationList className={cls.notification} />
            </Popover>
          }
          off={
            <PopoverDeprecated
              className={classNames('', {}, [className])}
              direction='bottom left'
              unmountPanel={false}
              trigger={trigger}
            >
              <NotificationList className={cls.notification} />
            </PopoverDeprecated>
          }
        />
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer
          isOpen={isOpen}
          onClose={handleClose}
        >
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  );
});
