import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from '@/widget/ThemeSwitcher';
import { LangSwitcher } from '@/widget/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routConfig/routConfig';
import { useTranslation } from 'react-i18next';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className = '' }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      {/* <Suspense fallback> */}
      <div className={cls.items}>
        <div className={cls.item}>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.main}
            className={cls.item}
          >
            <MainIcon className={cls.icon} />
            <span className={cls.link}>{t('Главная')}</span>
          </AppLink>
        </div>
        <div className={cls.item}>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.about}
            className={cls.item}
          >
            <AboutIcon className={cls.icon} />
            <span className={cls.link}> {t('О сайте')}</span>
          </AppLink>
        </div>
      </div>
      {/* </Suspense> */}
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
};
