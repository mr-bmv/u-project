import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { FC, useState } from 'react';
import { ThemeSwitcher } from '@/widget/ThemeSwitcher';
import { LangSwitcher } from '@/widget/LangSwitcher';
import { Button } from '@/shared/ui/Button/Button';
import { t } from 'i18next';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className = '' }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = (): void => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onToggle}>{t('toggle')}</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
