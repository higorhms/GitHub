import React, { createContext, useState, useCallback } from 'react';

export interface LoadingProps {
  isLoading: boolean;
  handleStartLoading(): void;
}

const LoadingContext = createContext({} as LoadingProps);

const LoadingProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleStartLoading = useCallback((): void => {
    setIsLoading(!isLoading);
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{ handleStartLoading, isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingProvider, LoadingContext };
