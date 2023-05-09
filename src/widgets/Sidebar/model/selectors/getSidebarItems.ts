import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/Sidebar';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile
} from '@/shared/constants/router';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const SidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      text: 'Главная',
      Icon: MainIcon
    },
    {
      path: getRouteAbout(),
      text: 'О сайте',
      Icon: AboutIcon
    }
  ];

  if (userData) {
    SidebarItemsList.push(
      {
        path: getRouteProfile(userData?.id),
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true
      },
      {
        path: getRouteArticles(),
        text: 'Статьи',
        Icon: ArticleIcon,
        authOnly: true
      }
    );
  }

  return SidebarItemsList;
});
