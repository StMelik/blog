import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className='about'>
      {t('О сайте')}
    </div>
  );
};

export default AboutPage; 
