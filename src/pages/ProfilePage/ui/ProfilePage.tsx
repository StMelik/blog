import { EditableProfileCard } from '@/features/EditableProfileCard';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page/Page';
import cls from './ProfilePage.module.scss';
import { ProfileRating } from '@/features/ProfileRating';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <Page className={classNames(cls.profilePage, {}, [className])}>
      <VStack gap="16">
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
