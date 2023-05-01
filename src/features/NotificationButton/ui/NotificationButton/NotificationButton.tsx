import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotificationButton.module.scss';
import { memo, useCallback, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { Popover } from '@/shared/ui/Popups';
import { Icon } from '@/shared/ui/Icon/Icon';
import { NotificationList } from '@/entities/Notification';
import { ButtonTheme } from '@/shared/ui/Button/ui/Button';
import NotificationsIcon from '@/shared/assets/icons/notification-20-20.svg';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';

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
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={handleOpen}
    >
      <Icon Svg={NotificationsIcon} inverted />
    </Button>
  );

  return (
    <>
      <BrowserView>
        <Popover
          className={classNames('', {}, [className])}
          direction="bottom left"
          unmountPanel={false}
          trigger={trigger}
        >
          <NotificationList className={cls.notification} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <AnimationProvider>
          <Drawer
            isOpen={isOpen}
            onClose={handleClose}
          >
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </>
  );
});
