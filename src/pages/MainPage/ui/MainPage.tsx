import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation();

  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className="main">
      <BugButton />
      {t('Главная')}
    </div>
  );
}

export default MainPage;
