import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';

export enum AppLang {
  RU = 'ru',
  EN = 'en'
}

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();

  const handleToggleLang = () => {
    i18n.changeLanguage(i18n.language === AppLang.EN ? AppLang.RU : AppLang.EN);
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={handleToggleLang}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};
