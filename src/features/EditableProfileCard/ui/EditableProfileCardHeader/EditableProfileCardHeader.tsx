import { getUserAuthData } from '@/entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button';

import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { ToggleFeature } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  (props: EditableProfileCardHeaderProps) => {
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
      <ToggleFeature
        feature='isAppRedesigned'
        on={
          <Card
            border='partial'
            className={classNames('', {}, [className])}
            padding='24'
            max
          >
            <HStack
              max
              justify='between'
            >
              <Text title={t('Профиль')} />

              {canEdit && (
                <div>
                  {readonly ? (
                    <Button
                      onClick={handleEdit}
                      data-testid='EditableProfileCardHeader.EditButton'
                    >
                      {t('Редактировать')}
                    </Button>
                  ) : (
                    <HStack gap='16'>
                      <Button
                        onClick={handleCancelEdit}
                        data-testid='EditableProfileCardHeader.CancelButton'
                        color='error'
                      >
                        {t('Отменить')}
                      </Button>
                      <Button
                        onClick={handleSave}
                        data-testid='EditableProfileCardHeader.SaveButton'
                        color='success'
                      >
                        {t('Сохранить')}
                      </Button>
                    </HStack>
                  )}
                </div>
              )}
            </HStack>
          </Card>
        }
        off={
          <HStack
            max
            justify='between'
            className={classNames('', {}, [className])}
          >
            <TextDeprecated title={t('Профиль')} />

            {canEdit && (
              <div>
                {readonly ? (
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE}
                    onClick={handleEdit}
                    data-testid='EditableProfileCardHeader.EditButton'
                  >
                    {t('Редактировать')}
                  </ButtonDeprecated>
                ) : (
                  <HStack gap='8'>
                    <ButtonDeprecated
                      theme={ButtonTheme.OUTLINE_RED}
                      onClick={handleCancelEdit}
                      data-testid='EditableProfileCardHeader.CancelButton'
                    >
                      {t('Отменить')}
                    </ButtonDeprecated>
                    <ButtonDeprecated
                      theme={ButtonTheme.OUTLINE}
                      onClick={handleSave}
                      data-testid='EditableProfileCardHeader.SaveButton'
                    >
                      {t('Сохранить')}
                    </ButtonDeprecated>
                  </HStack>
                )}
              </div>
            )}
          </HStack>
        }
      />
    );
  }
);
