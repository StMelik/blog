import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';

interface ArticleAdditionalInfoProps {
  className?: string;
  author?: User;
  createAt?: string;
  views?: number;
  onEdit?: () => void;
}

export const ArticleAdditionalInfo = memo(
  (props: ArticleAdditionalInfoProps) => {
    const { className, author, createAt, views, onEdit } = props;

    const { t } = useTranslation();

    return (
      <VStack
        gap='32'
        className={classNames('', {}, [className])}
      >
        <HStack>
          <Avatar
            src={author?.avatar}
            size={32}
            username={author?.username}
          />
          <Text text={createAt} />
        </HStack>
        <Button onClick={onEdit}>{t('Редактировать')}</Button>
        <Text text={t('{{count}} просмотров', { count: views })} />
      </VStack>
    );
  }
);
