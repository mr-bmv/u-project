import { classNames } from '@/shared/lib/classNames/classNames';
// import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className = '' } = props;
  // const { t } = useTranslation();

  return <div className={classNames('', {}, [className])}>22</div>;
};

export default memo(ArticleDetailsPage);
