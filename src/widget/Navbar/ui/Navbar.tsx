import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Modal } from '@/shared/ui/Modal/Modal';
import { t } from 'i18next';
import { useState } from 'react';
import { Button } from '@/shared/ui/Button/Button';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [close, setClose] = useState(true);

  const onClose = () => setClose(false);
  return (
    <div className={classNames(cls.navbar, {}, [className || ''])}>
      <Button
        onClick={() => {
          setClose(true);
        }}
      />
      <Modal isOpen={close} onClose={onClose}>
        {/* eslint-disable-next-line */}
        {t(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.'
        )}
      </Modal>
    </div>
  );
};
