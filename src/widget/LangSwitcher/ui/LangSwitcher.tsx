import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { FC } from 'react';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className = '' }) => {
  const { t, i18n } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const toggle = async () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  );
};
