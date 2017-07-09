/**
 * The AppConfig file is used to store application config variables (like the api endpoint url)
 * in a single place that's easily injected into any component.
 */

export const appConfig = {

  // Endpoint to the ORCA GRC server
  // orcagrcEndpoint: 'http://localhost:3000',
  // orcagrcEndpoint: 'http://172.30.34.167:8082/Grc',
  // orcagrcEndpoint: 'https://172.30.34.245/Grc',
  apiUrl: 'http://localhost:3000',

  // URL to web API
  //apiUrl: '/user/session',
  //   '/api/v1/authenticate'
  //   '/api/v1/user/1'

  // URL to JSON file
  fileUrl: 'app/menu.json'

};

/*
export interface AppConfig {
  apiEndpoint: string;
  authRoute: string;
  title: string;
}
*/

/*
export class AppConfig {
  public readonly apiUrl = 'http://localhost:4000';
};
*/
