import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  /* eslint-disable i18next/no-literal-string */

  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={handleToggleModal}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={handleToggleModal}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quasi fuga quam, consectetur quidem beatae.
        Unde minima aspernatur consequatur magnam odio sint!
      </Modal>
    </div>
  );
};
