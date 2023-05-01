import { Notification } from '../../model/types/Notification';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';

interface NotificationItemProps {
  className?: string;
  item: Notification
}

export const NotificationItem = (props: NotificationItemProps) => {
  const { className, item } = props;

  const { t } = useTranslation();

  const content = (
    <Card
      className={classNames(cls.notificationItem, {}, [className])}
      theme={CardTheme.OUTLINED}
    >
      <Text
        title={item.title}
        text={item.description}
      />
    </Card>
  );

  if (item.href) {
    return (
      <a
        className={cls.link}
        target="_blank"
        href={item.href}
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return content;
};
