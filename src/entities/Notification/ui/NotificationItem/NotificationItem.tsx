import { Notification } from '../../model/types/Notification';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeature } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = (props: NotificationItemProps) => {
  const { className, item } = props;

  const { t } = useTranslation();

  const content = (
    <ToggleFeature
      feature='isAppRedesigned'
      on={
        <Card className={classNames(cls.notificationItem, {}, [className])}>
          <Text
            title={item.title}
            text={item.description}
          />
        </Card>
      }
      off={
        <CardDeprecated
          className={classNames(cls.notificationItem, {}, [className])}
          theme={CardTheme.OUTLINED}
        >
          <TextDeprecated
            title={item.title}
            text={item.description}
          />
        </CardDeprecated>
      }
    />
  );

  if (item.href) {
    return (
      <a
        className={cls.link}
        target='_blank'
        href={item.href}
        rel='noreferrer'
      >
        {content}
      </a>
    );
  }

  return content;
};
