import { config } from 'dotenv';

function setEnvironment(): void {
  const getPathEnvironment = (): string => {
    if (process.env.NODE_ENV === 'production') return '.env.production';
    if (process.env.NODE_ENV === 'development') return '.env.development';
    return '.env.test';
  };

  config({
    path: getPathEnvironment(),
  });
}

setEnvironment();
