import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className = '' }: ProfileCardProps) => {
  // объявляем новое пространство имен
  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData);
  // const error = useSelector(getProfileError);
  // const isLoading = useSelector(getProfileLoading);

  console.log(data);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль пользователя')} />
        <Button theme={ThemeButton.OUTLINE}>{t('Редактировать')}</Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваше фамилия')}
          className={cls.input}
        />
      </div>
    </div>
  );
};
