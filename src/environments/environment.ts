// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth_config: {
    client_id: 'interactive.public',
    server_host: 'https://demo.identityserver.io/',
    redirect_url: 'com.photogallery.demo://callback',
    end_session_redirect_url: 'com.photogallery.demo://endsession',
    scopes: 'openid profile email api offline_access',
    pkce: true,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
