import { useNotifications } from '../../api/notificationApi';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = (props: NotificationListProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 10000
  });

  if (isLoading) {
    return (
      <VStack
        gap='16'
        max
        className={classNames('', {}, [className])}
      >
        <Skeleton
          width='100%'
          borderRadius='8px'
          height='80px'
        />
        <Skeleton
          width='100%'
          borderRadius='8px'
          height='80px'
        />
        <Skeleton
          width='100%'
          borderRadius='8px'
          height='80px'
        />
      </VStack>
    );
  }

  return (
    <VStack
      gap='16'
      max
      className={classNames('', {}, [className])}
    >
      {data?.map((item) => (
        <NotificationItem
          key={item.id}
          item={item}
        />
      ))}
    </VStack>
  );
};
