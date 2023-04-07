import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const { t } = useTranslation('profile');

  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && readonly
        ? (
          <Button theme={ButtonTheme.OUTLINE} onClick={handleEdit}>
            {t('Редактировать')}
          </Button>
        ) : (
          <HStack gap="8">
            <Button theme={ButtonTheme.OUTLINE_RED} onClick={handleCancelEdit}>
              {t('Отменить')}
            </Button>
            <Button theme={ButtonTheme.OUTLINE} onClick={handleSave}>
              {t('Сохранить')}
            </Button>
          </HStack>
        )}
    </HStack>
  );
};
