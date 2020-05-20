import React, { createContext, useState, useCallback } from 'react';

export interface LoadingProps {
  isLoading: boolean;
  handleStartLoading(value: boolean): void;
}

const LoadingContext = createContext({} as LoadingProps);

const LoadingProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleStartLoading = useCallback((value): void => {
    setIsLoading(value);
  }, []);

  return (
    <LoadingContext.Provider value={{ handleStartLoading, isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingProvider, LoadingContext };
