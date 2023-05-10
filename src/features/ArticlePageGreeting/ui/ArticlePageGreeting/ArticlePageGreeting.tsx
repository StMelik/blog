import { saveJsonSettings, useGetJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/Drawer';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { isFirstVisitArticlePage = true } = useGetJsonSettings();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isFirstVisitArticlePage) return;

    setIsOpen(true);
    dispatch(saveJsonSettings({ isFirstVisitArticlePage: false }));
  }, [dispatch, isFirstVisitArticlePage]);

  const handleClose = () => setIsOpen(false);

  const text = (
    <Text
      title={t('Добро пожаловать на страницу статей')}
      text={t(
        'Здесь вы можете искать и просматривать статьи на различные темы'
      )}
    />
  );

  if (isMobile) {
    return (
      <Drawer
        isOpen={isOpen}
        lazy
        onClose={handleClose}
      >
        {text}
      </Drawer>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      lazy
      onClose={handleClose}
    >
      {text}
    </Modal>
  );
});
