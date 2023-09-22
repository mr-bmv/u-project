import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
// import cls from './ProfilePage.module.scss';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '@/entities/Profile';

interface ProfilePagePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className = '' }: ProfilePagePageProps) => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        data-testid="ProfilePage"
        className={classNames(
          '',
          // cls.ProfilePage,
          {},
          [className]
        )}
      >
        {t('Profile  Page')}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
