import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal
    className={classNames(cls.loginModal, {}, [className])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <Suspense fallback={<Loader />}>
      <LoginFormLazy onSuccess={onClose} />
    </Suspense>
  </Modal>
);
