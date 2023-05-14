import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { RatingCard } from '@/entities/Rating';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import {
  useGetProfileRating,
  useRateProfile
} from '../../model/api/profileRatingApi';

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
  const { className, profileId } = props;
  const { t } = useTranslation();

  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetProfileRating({
    profileId,
    userId: userData?.id ?? ''
  });

  const [rateProfileMutation] = useRateProfile();

  const handleRateArticle = useCallback(
    (starsCount: number) => {
      try {
        rateProfileMutation({
          profileId,
          rate: starsCount,
          userId: userData?.id ?? ''
        });
      } catch (e) {
        console.log(e);
      }
    },
    [profileId, rateProfileMutation, userData?.id]
  );

  const handleCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle]
  );

  const handleAccept = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle]
  );

  if (userData?.id === profileId) {
    return null;
  }

  if (isLoading) {
    return (
      <Skeleton
        width='100%'
        height={120}
      />
    );
  }

  const rating = data?.[0];

  return (
    <RatingCard
      className={className}
      title={t('Оцените пользователя')}
      rate={rating?.rate}
      onAccept={handleAccept}
      onCancel={handleCancel}
    />
  );
});

export default ProfileRating;
