import { Country } from '../../model/types/CountrySchema';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useCallback } from 'react';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeature } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Ukraine, content: Country.Ukraine }
];

export const CountrySelect = (props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation();

  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value as Country);
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
          defaultValue={t('Страна')}
          label={t('Страна')}
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
          defaultValue={t('Страна')}
          label={t('Укажите страну')}
          items={options}
          readonly={readonly}
          direction='top right'
        />
      }
    />
  );
};
