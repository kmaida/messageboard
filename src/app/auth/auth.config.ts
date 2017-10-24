import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'ycjc5mO1KwnF0CifluBtPVg63D2XVqIB',
  CLIENT_DOMAIN: 'kmaida.auth0.com',
  AUDIENCE: 'http://localhost:8085/api/',
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile'
};
