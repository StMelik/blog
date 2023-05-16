import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { getVStack, HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { useTranslation } from 'react-i18next';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';

export const ProfileCardRedesignedSkeleton = () => (
  <Card
    max
    padding='24'
    className={getVStack({ gap: '32' })}
  >
    <HStack
      max
      justify='center'
    >
      <Skeleton
        borderRadius='100%'
        width={128}
        height={128}
      />
    </HStack>
    <HStack
      gap='32'
      max
    >
      <VStack
        gap='16'
        max
      >
        <Skeleton
          width='100%'
          height={38}
        />
        <Skeleton
          width='100%'
          height={38}
        />
        <Skeleton
          width='100%'
          height={38}
        />
        <Skeleton
          width='100%'
          height={38}
        />
      </VStack>
      <VStack
        gap='16'
        max
      >
        <Skeleton
          width='100%'
          height={38}
        />
        <Skeleton
          width='100%'
          height={38}
        />
        <Skeleton
          width='100%'
          height={38}
        />
        <Skeleton
          width='100%'
          height={38}
        />
      </VStack>
    </HStack>
  </Card>
);

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation('profile');

  return (
    <HStack
      justify='center'
      max
    >
      <Text
        variant='error'
        align='center'
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Попробуйте обновить страницу')}
      />
    </HStack>
  );
};

export const ProfileCardRedesigned = (props: ProfileCardProps) => {
  const {
    className,
    data,
    handleChangeFirstName,
    handleChangeLastName,
    readonly,
    handleChangeAge,
    handleChangeCity,
    handleChangeAvatar,
    handleChangeUsername,
    handleChangeCurrency,
    handleChangeCountry
  } = props;

  const { t } = useTranslation('profile');

  return (
    <Card
      className={classNames('', {}, [className, getVStack({ gap: '32' })])}
      max
      padding='24'
    >
      {data?.avatar && (
        <HStack
          justify='center'
          max
        >
          <Avatar
            src={data?.avatar}
            alt='Аватар'
            size={128}
          />
        </HStack>
      )}

      <HStack
        gap='24'
        max
      >
        <VStack
          gap='16'
          max
        >
          <Input
            value={data?.first}
            label={t('Имя')}
            onChange={handleChangeFirstName}
            readonly={readonly}
            data-testid='ProfileCard.FirstNameInput'
          />

          <Input
            value={data?.lastname}
            label={t('Фамилия')}
            onChange={handleChangeLastName}
            readonly={readonly}
            data-testid='ProfileCard.LastNameInput'
          />

          <Input
            value={data?.age}
            label={t('Возраст')}
            onChange={handleChangeAge}
            readonly={readonly}
          />

          <Input
            value={data?.city}
            label={t('Город')}
            onChange={handleChangeCity}
            readonly={readonly}
          />
        </VStack>

        <VStack
          gap='16'
          max
        >
          <Input
            value={data?.username}
            label={t('Никнейм')}
            onChange={handleChangeUsername}
            readonly={readonly}
          />

          <Input
            value={data?.avatar}
            label={t('Аватар')}
            onChange={handleChangeAvatar}
            readonly={readonly}
          />

          <CurrencySelect
            value={data?.currency}
            onChange={handleChangeCurrency}
            readonly={readonly}
          />

          <CountrySelect
            value={data?.country}
            onChange={handleChangeCountry}
            readonly={readonly}
          />
        </VStack>
      </HStack>
    </Card>
  );
};
