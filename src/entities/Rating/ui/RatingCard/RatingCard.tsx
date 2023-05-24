import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
  Button as ButtonDeprecated,
  ButtonSize,
  ButtonTheme
} from '@/shared/ui/deprecated/Button';

import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { ToggleFeature } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

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

  const handleSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);

      if (hasFeedback) {
        setIsOpenModal(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept]
  );

  const handleAccept = useCallback(() => {
    setIsOpenModal(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const handleCancel = useCallback(() => {
    setIsOpenModal(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <ToggleFeature
      feature='isAppRedesigned'
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            data-testid='RatingCard.Input'
            placeholder={t('Ваш отзыв')}
            value={feedback}
            onChange={setFeedback}
          />
        </>
      }
      off={
        <>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            data-testid='RatingCard.Input'
            placeholder={t('Ваш отзыв')}
            value={feedback}
            onChange={setFeedback}
          />
        </>
      }
    />
  );

  const content = (
    <>
      <VStack
        align='center'
        gap='8'
      >
        <ToggleFeature
          feature='isAppRedesigned'
          on={<Text title={starsCount ? t('Спасибо за оценку!') : title} />}
          off={
            <TextDeprecated
              title={starsCount ? t('Спасибо за оценку!') : title}
            />
          }
        />
        <StarRating
          size={40}
          onSelect={handleSelectStars}
          selectedStars={starsCount}
        />
      </VStack>
      <BrowserView>
        <Modal
          isOpen={isModalOpen}
          lazy
        >
          <VStack
            gap='32'
            max
          >
            {modalContent}
            <ToggleFeature
              feature='isAppRedesigned'
              on={
                <HStack
                  max
                  gap='16'
                  justify='end'
                >
                  <Button
                    data-testid='RatingCard.Close'
                    onClick={handleCancel}
                  >
                    {t('Закрыть')}
                  </Button>
                  <Button
                    data-testid='RatingCard.Send'
                    onClick={handleAccept}
                  >
                    {t('Отправить')}
                  </Button>
                </HStack>
              }
              off={
                <HStack
                  max
                  gap='16'
                  justify='end'
                >
                  <ButtonDeprecated
                    data-testid='RatingCard.Close'
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={handleCancel}
                  >
                    {t('Закрыть')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    data-testid='RatingCard.Send'
                    onClick={handleAccept}
                  >
                    {t('Отправить')}
                  </ButtonDeprecated>
                </HStack>
              }
            />
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer
          isOpen={isModalOpen}
          lazy
          onClose={handleCancel}
        >
          <VStack
            max
            gap='32'
          >
            {modalContent}
            <ToggleFeature
              feature='isAppRedesigned'
              on={
                <Button
                  onClick={handleAccept}
                  size='l'
                  fullWidth
                >
                  {t('Отправить')}
                </Button>
              }
              off={
                <ButtonDeprecated
                  onClick={handleAccept}
                  size={ButtonSize.XL}
                  fullWidth
                >
                  {t('Отправить')}
                </ButtonDeprecated>
              }
            />
          </VStack>
        </Drawer>
      </MobileView>
    </>
  );

  return (
    <ToggleFeature
      feature='isAppRedesigned'
      on={
        <Card
          data-testid='RatingCard'
          padding='24'
          border='round'
          className={classNames('', {}, [className])}
          max
        >
          {content}
        </Card>
      }
      off={
        <CardDeprecated
          data-testid='RatingCard'
          className={classNames('', {}, [className])}
          max
        >
          {content}
        </CardDeprecated>
      }
    />
  );
});
