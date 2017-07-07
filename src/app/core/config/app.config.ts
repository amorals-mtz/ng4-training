/**
 * The AppConfig file is used to store application config variables (like the api endpoint url)
 * in a single place that's easily injected into any component.
 */

export class AppConfig {
  public readonly apiUrl = 'http://localhost:4000';
};

/*
export interface AppConfig {
  apiEndpoint: string;
  authRoute: string;
  title: string;
}

export const ORCA_GRC_CONFIG: AppConfig = {

  // ORCA GRC API Endpoint URL
  apiEndpoint: 'http://localhost:4000',

  // User authentication route
  authRoute: '/user/session',

  title: 'ORCA GRC - Dependency Injection'
};
*/
