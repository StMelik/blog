import { BugButton } from '@/app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating';

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
      <RatingCard
        title={t('Как вам статья?')}
        hasFeedback
        feedbackTitle={t('Оставьте отзыв о статье')}
      />
    </Page>
  );
}

export default MainPage;
