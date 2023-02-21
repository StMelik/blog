import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import cls from './LangSwitcher.module.scss';

export enum AppLang {
  RU = 'ru',
  EN = 'en'
}

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const handleToggleLang = () => {
    i18n.changeLanguage(i18n.language === AppLang.EN ? AppLang.RU : AppLang.EN);
  };

  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      onClick={handleToggleLang}
    >
      {t('Язык')}
    </Button>
  );
};
