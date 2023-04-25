import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotificationButton.module.scss';
import { memo } from 'react';
import { Button } from 'shared/ui/Button';
import { Popover } from 'shared/ui/Popups';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import NotificationsIcon from 'shared/assets/icons/notification-20-20.svg';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Popover
      className={classNames('', {}, [className])}
      direction="bottom left"
      unmountPanel={false}
      trigger={(
        <Button
          theme={ButtonTheme.CLEAR}
        >
          <Icon Svg={NotificationsIcon} inverted />
        </Button>
      )}
    >
      <NotificationList className={cls.notification} />
    </Popover>
  );
});
