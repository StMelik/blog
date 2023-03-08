import { profileReducer } from 'entities/Profile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLouder, ReducersList } from 'shared/lib/components/DynamicModuleLouder/DynamicModuleLouder';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: profileReducer
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLouder reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.profilePage, {}, [className])}>{t('Страница профиля')}</div>
    </DynamicModuleLouder>
  );
};

export default ProfilePage;
