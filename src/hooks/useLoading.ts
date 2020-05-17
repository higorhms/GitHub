import { useContext } from 'react';

import { LoadingProps, LoadingContext } from '../contexts/LoadingContext';

const useLoading = (): LoadingProps => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw Error('Context must be used within an LoadingProvider');
  }

  return context;
};

export default useLoading;
