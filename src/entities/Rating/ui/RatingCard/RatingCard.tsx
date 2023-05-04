import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';

import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string | null;
  feedbackTitle?: string | null;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
    rate = 0
  } = props;

  const { t } = useTranslation();

  const [isModalOpen, setIsOpenModal] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const handleSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);

    if (hasFeedback) {
      setIsOpenModal(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

  const handleAccept = useCallback(() => {
    setIsOpenModal(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const handleCancel = useCallback(() => {
    setIsOpenModal(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        placeholder={t('Ваш отзыв')}
        value={feedback}
        onChange={setFeedback}
      />
    </>
  );

  return (
    <Card className={classNames('', {}, [className])} max>
      <VStack
        align="center"
        gap="8"
      >
        <Text title={starsCount ? t('Спасибо за оценку!') : title} />
        <StarRating
          size={40}
          onSelect={handleSelectStars}
          selectedStars={starsCount}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack gap="32" max>
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                onClick={handleCancel}
              >
                {t('Закрыть')}
              </Button>
              <Button onClick={handleAccept}>
                {t('Отправить')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer
          isOpen={isModalOpen}
          lazy
          onClose={handleCancel}
        >
          <VStack max gap="32">
            {modalContent}
            <Button
              onClick={handleAccept}
              size={ButtonSize.XL}
              fullWidth
            >
              {t('Отправить')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
});
