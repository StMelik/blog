import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ToggleFeature } from '@/shared/lib/features';
import { Profile } from '../../model/types/ProfileSchema';
import {
  ProfileCardDeprecated,
  ProfileCardDeprecatedError,
  ProfileCardDeprecatedLoader
} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import {
  ProfileCardRedesigned,
  ProfileCardRedesignedError,
  ProfileCardRedesignedSkeleton
} from '../ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  handleChangeFirstName?: (value?: string) => void;
  handleChangeLastName?: (value?: string) => void;
  handleChangeAge?: (value?: string) => void;
  handleChangeCity?: (value?: string) => void;
  handleChangeAvatar?: (value?: string) => void;
  handleChangeUsername?: (value?: string) => void;
  handleChangeCurrency?: (value: Currency) => void;
  handleChangeCountry?: (value: Country) => void;
  readonly: boolean | undefined;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { isLoading, error } = props;

  if (isLoading) {
    return (
      <ToggleFeature
        feature='isAppRedesigned'
        on={<ProfileCardRedesignedSkeleton />}
        off={<ProfileCardDeprecatedLoader />}
      />
    );
  }

  if (error) {
    return (
      <ToggleFeature
        feature='isAppRedesigned'
        on={<ProfileCardRedesignedError />}
        off={<ProfileCardDeprecatedError />}
      />
    );
  }

  return (
    <ToggleFeature
      feature='isAppRedesigned'
      on={<ProfileCardRedesigned {...props} />}
      off={<ProfileCardDeprecated {...props} />}
    />
  );
};
