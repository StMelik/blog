import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/deprecated/Button';

// Компонент для тестирования
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (error) {
      throw new Error('Test Error');
    }
  }, [error]);

  const handleThrow = () => {
    setError(true);
  };

  return <Button onClick={handleThrow}>{t('Выбросить ошибку')}</Button>;
};
