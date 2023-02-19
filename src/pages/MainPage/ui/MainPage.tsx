import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className='main'>
      {t('Главная')}
    </div>
  );
};

export default MainPage;
