import { Currency } from '../../model/types/CurrencySchema';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeature } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD }
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation();

  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <ToggleFeature
      feature='isAppRedesigned'
      on={
        <ListBox
          value={value}
          onChange={handleChange}
          className={classNames('', {}, [className])}
          defaultValue={t('Валюта')}
          label={t('Валюта')}
          items={options}
          readonly={readonly}
          direction='top right'
        />
      }
      off={
        <ListBoxDeprecated
          value={value}
          onChange={handleChange}
          className={classNames('', {}, [className])}
          defaultValue={t('Валюта')}
          label={t('Укажите валюту')}
          items={options}
          readonly={readonly}
          direction='top right'
        />
      }
    />
  );
});
