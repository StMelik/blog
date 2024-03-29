import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <Page
      className='about'
      data-testid='AboutPage'
    >
      {t('О сайте')}
    </Page>
  );
}

export default AboutPage;
