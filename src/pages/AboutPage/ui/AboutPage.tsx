import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <Page className="about">
      {t('О сайте')}
    </Page>
  );
}

export default AboutPage;
