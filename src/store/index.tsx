import React from 'react';
import { PropsWithChildren } from 'react';
import { CommonProvider } from './common';

export const StoreProvider = ({ children }: PropsWithChildren) => {
  return (
    <CommonProvider>
      {/* // */}
      {children}
    </CommonProvider>
  );
};

export * from './common';
