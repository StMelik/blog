import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import {
  Text as TextDeprecated,
  TextAlign,
  TextTheme
} from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { useTranslation } from 'react-i18next';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import cls from './ProfileCardDeprecated.module.scss';

export const ProfileCardDeprecatedLoader = () => (
  <HStack
    justify='center'
    max
    className={classNames(cls.profileCard, {}, [cls.loading])}
  >
    <LoaderDeprecated />
  </HStack>
);

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation('profile');

  return (
    <HStack
      justify='center'
      className={classNames(cls.profileCard, {}, [cls.error])}
    >
      <TextDeprecated
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Попробуйте обновить страницу')}
      />
    </HStack>
  );
};

export const ProfileCardDeprecated = (props: ProfileCardProps) => {
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

  const mods: Mods = {
    [cls.editing]: !readonly
  };

  return (
    <VStack
      max
      gap='16'
      className={classNames(cls.profileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack
          justify='center'
          max
        >
          <AvatarDeprecated
            src={data?.avatar}
            alt='Аватар'
          />
        </HStack>
      )}

      <InputDeprecated
        value={data?.first}
        placeholder={t('Ваше имя')}
        className={cls.input}
        onChange={handleChangeFirstName}
        readonly={readonly}
        data-testid='ProfileCard.FirstNameInput'
      />

      <InputDeprecated
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        className={cls.input}
        onChange={handleChangeLastName}
        readonly={readonly}
        data-testid='ProfileCard.LastNameInput'
      />

      <InputDeprecated
        value={data?.age}
        placeholder={t('Ваш возраст')}
        className={cls.input}
        onChange={handleChangeAge}
        readonly={readonly}
      />

      <InputDeprecated
        value={data?.city}
        placeholder={t('Город')}
        className={cls.input}
        onChange={handleChangeCity}
        readonly={readonly}
      />

      <InputDeprecated
        value={data?.username}
        placeholder={t('Ваш никнейм')}
        className={cls.input}
        onChange={handleChangeUsername}
        readonly={readonly}
      />

      <InputDeprecated
        value={data?.avatar}
        placeholder={t('Ссылка на аватар')}
        className={cls.input}
        onChange={handleChangeAvatar}
        readonly={readonly}
      />

      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={handleChangeCurrency}
        readonly={readonly}
      />

      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={handleChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
};
