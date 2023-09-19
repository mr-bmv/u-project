import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widget/Navbar';
import { Sidebar } from '@/widget/Sidebar';
import { AppRouter } from './providers/routes';
import './styles/index.scss';
import { Suspense } from 'react';

const App = () => {
  return (
    <div className={classNames('app', {})}>
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
