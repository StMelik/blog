import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/ProfileSchema';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
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
  const {
    className,
    data,
    isLoading,
    error,
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

  if (isLoading) {
    return (
      <HStack justify="center" max className={classNames(cls.profileCard, {}, [className, cls.loading])}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack justify="center" className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  };

  return (
    <VStack max gap="16" className={classNames(cls.profileCard, mods, [className])}>
      {data?.avatar && (
        <HStack justify="center" max>
          <Avatar src={data?.avatar} alt="Аватар" />
        </HStack>
      )}

      <Input
        value={data?.first}
        placeholder={t('Ваше имя')}
        className={cls.input}
        onChange={handleChangeFirstName}
        readonly={readonly}
      />

      <Input
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        className={cls.input}
        onChange={handleChangeLastName}
        readonly={readonly}
      />

      <Input
        value={data?.age}
        placeholder={t('Ваш возраст')}
        className={cls.input}
        onChange={handleChangeAge}
        readonly={readonly}
      />

      <Input
        value={data?.city}
        placeholder={t('Город')}
        className={cls.input}
        onChange={handleChangeCity}
        readonly={readonly}
      />

      <Input
        value={data?.username}
        placeholder={t('Ваш никнейм')}
        className={cls.input}
        onChange={handleChangeUsername}
        readonly={readonly}
      />

      <Input
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
