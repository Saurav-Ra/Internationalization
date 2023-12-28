import React from 'react';
import { useTranslation } from 'react-i18next';

const Child = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('word')} </h1>
    </div>
  );
};

export default Child;
