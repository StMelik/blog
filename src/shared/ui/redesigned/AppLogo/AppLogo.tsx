import AppIcon from '@/shared/assets/icons/app-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { HStack } from '../Stack';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className, size = 50 } = props;

  return (
    <HStack
      className={classNames(cls.appLogoWrapper, {}, [className])}
      justify='center'
      max
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppIcon
        width={size}
        height={size}
        className={cls.appIcon}
      />
    </HStack>
  );
});
