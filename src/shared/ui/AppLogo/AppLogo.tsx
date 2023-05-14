import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppIcon from '@/shared/assets/icons/app-icon.svg';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';

interface AppLogoProps {
  className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <HStack
      className={classNames(cls.appLogoWrapper, {}, [className])}
      justify='center'
      max
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppIcon className={cls.appIcon} />
    </HStack>
  );
});
