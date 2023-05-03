import { Page } from '@/widgets/Page';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation();

  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Page className="main">
      {t('Главная')}
    </Page>
  );
}

export default MainPage;
