import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { ToggleFeature } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

export enum AppLang {
  RU = 'ru',
  EN = 'en'
}

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(
  ({ className, short }) => {
    const { t, i18n } = useTranslation();

    const handleToggleLang = () => {
      i18n.changeLanguage(
        i18n.language === AppLang.EN ? AppLang.RU : AppLang.EN
      );
    };

    return (
      <ToggleFeature
        feature='isAppRedesigned'
        on={
          <Button
            className={classNames('', {}, [className])}
            onClick={handleToggleLang}
            variant='clear'
          >
            {t(short ? 'Короткий язык' : 'Язык')}
          </Button>
        }
        off={
          <ButtonDeprecated
            className={classNames('', {}, [className])}
            onClick={handleToggleLang}
          >
            {t(short ? 'Короткий язык' : 'Язык')}
          </ButtonDeprecated>
        }
      />
    );
  }
);
