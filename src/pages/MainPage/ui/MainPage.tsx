import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation();

  return (
    <Page
      data-testid='MainPage'
      className='main'
    >
      {t('Главная')}
    </Page>
  );
}

export default MainPage;
