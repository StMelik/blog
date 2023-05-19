import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLouder,
  ReducersList
} from '@/shared/lib/components/DynamicModuleLouder/DynamicModuleLouder';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button';

import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { ToggleFeature } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
};

const LoginForm: FC<LoginFormProps> = memo(({ className, onSuccess }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const handleChangeUserName = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch]
  );

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const handleLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ password, username }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, username, password]);

  return (
    <DynamicModuleLouder
      reducers={initialReducers}
      removeAfterUnmount
    >
      <ToggleFeature
        feature='isAppRedesigned'
        on={
          <VStack
            className={classNames(cls.loginForm, {}, [className])}
            gap='16'
          >
            <Text title={t('Форма авторизации')} />
            {error && (
              <Text
                text={t('Вы ввели неверный логин или пароль')}
                variant='error'
              />
            )}
            <Input
              type='text'
              className={cls.input}
              placeholder={t('Введите логин')}
              autofocus
              onChange={handleChangeUserName}
              value={username}
            />
            <Input
              type='password'
              className={cls.input}
              placeholder={t('Введите пароль')}
              onChange={handleChangePassword}
              value={password}
            />
            <Button
              className={cls.loginBtn}
              variant='outline'
              onClick={handleLoginClick}
              disabled={isLoading}
            >
              {t('Войти')}
            </Button>
          </VStack>
        }
        off={
          <div className={classNames(cls.loginForm, {}, [className])}>
            <TextDeprecated title={t('Форма авторизации')} />
            {error && (
              <TextDeprecated
                text={t('Вы ввели неверный логин или пароль')}
                theme={TextTheme.ERROR}
              />
            )}
            <InputDeprecated
              type='text'
              className={cls.input}
              placeholder={t('Введите логин')}
              autofocus
              onChange={handleChangeUserName}
              value={username}
            />
            <InputDeprecated
              type='text'
              className={cls.input}
              placeholder={t('Введите пароль')}
              onChange={handleChangePassword}
              value={password}
            />
            <ButtonDeprecated
              className={cls.loginBtn}
              theme={ButtonTheme.OUTLINE}
              onClick={handleLoginClick}
              disabled={isLoading}
            >
              {t('Войти')}
            </ButtonDeprecated>
          </div>
        }
      />
    </DynamicModuleLouder>
  );
});

export default LoginForm;
