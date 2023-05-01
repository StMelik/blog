import { BugButton } from '@/app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

function MainPage() {
  const { t } = useTranslation();

  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Page className="main">
      <BugButton />
      {t('Главная')}
    </Page>
  );
}

export default MainPage;
