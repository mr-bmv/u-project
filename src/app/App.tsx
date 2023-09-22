import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widget/Navbar';
import { Sidebar } from '@/widget/Sidebar';
import { AppRouter } from './providers/routes';
import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import { useTheme } from './providers/ThemProvider';
import { useDispatch } from 'react-redux';
import { userActions } from '@/entities/User';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);
  return (
    <div className={classNames('app', {}, [theme])}>
      {/* // suspense для использования i18n */}
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
export default App;
