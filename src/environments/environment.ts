// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com/products/',
  firebaseConfig: {
    apiKey: 'AIzaSyBDEQYW_mw_s462PtZsZpG_XQanfR16PuA',
    authDomain: 'platzi-store-995bd.firebaseapp.com',
    databaseURL: 'https://platzi-store-995bd.firebaseio.com',
    projectId: 'platzi-store-995bd',
    storageBucket: 'platzi-store-995bd.appspot.com',
    messagingSenderId: '636019844791',
    appId: '1:636019844791:web:60276c248f3532dd8e4f32'
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
