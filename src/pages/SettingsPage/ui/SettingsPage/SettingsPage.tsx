import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { getVStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface SettingsPageProps {
  className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames('', {}, [className, getVStack({ gap: '16' })])}>
      <Text title={t('Настройки пользователя')} />
      <UiDesignSwitcher />
    </Page>
  );
});

export default SettingsPage;
