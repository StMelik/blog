import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation();

  return (
    <div className="main">
      <BugButton />
      {t('Главная')}
    </div>
  );
}

export default MainPage;
