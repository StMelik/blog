import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/Sidebar';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import { RoutePath } from '@/shared/constants/router';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const SidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        text: 'Главная',
        Icon: MainIcon
      },
      {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon
      }
    ];

    if (userData) {
      SidebarItemsList.push(
        {
          path: `${RoutePath.profile}${userData?.id}`,
          text: 'Профиль',
          Icon: ProfileIcon,
          authOnly: true
        },
        {
          path: RoutePath.articles,
          text: 'Статьи',
          Icon: ArticleIcon,
          authOnly: true
        }
      );
    }

    return SidebarItemsList;
  }
);
