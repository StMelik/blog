import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlags, updateFeatureFlags } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useGetUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface UiDesignSwitcherProps {
  className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props;

  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isAppRedesigned = getFeatureFlags('isAppRedesigned');
  const authData = useGetUserAuthData();

  const items = [
    {
      content: t('Новый'),
      value: 'new'
    },
    {
      content: t('Старый'),
      value: 'old'
    }
  ];

  const handleChange = async (value: string) => {
    if (!authData) return;

    setIsLoading(true);

    await dispatch(
      updateFeatureFlags({
        userId: authData.id,
        newFeatures: {
          isAppRedesigned: value === 'new'
        }
      })
    ).unwrap();

    setIsLoading(false);
  };

  return (
    <HStack gap='8'>
      <Text text={t('Вариант интерфейса')} />
      {isLoading ? (
        <Skeleton
          width={120}
          height={32}
          borderRadius='34px'
        />
      ) : (
        <ListBox
          value={isAppRedesigned ? 'new' : 'old'}
          className={classNames('', {}, [className])}
          items={items}
          onChange={handleChange}
        />
      )}
    </HStack>
  );
});
