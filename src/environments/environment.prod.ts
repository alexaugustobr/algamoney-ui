export const environment = {
  production: true,
  apiUrl: 'https://ag-m-app.herokuapp.com',

  tokenAllowedDomains: [ new RegExp('ag-m-app.herokuapp.com') ],
  tokenDisallowedRoutes: [ new RegExp('\/oauth\/token') ]
};