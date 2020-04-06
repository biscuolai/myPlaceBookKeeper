// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// hosting url: https://myplanbookkeeper.web.app
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAiekX6GrXTfpvJ93ZK3eGriUVsQpmdsQQ",
    authDomain: "myplanbookkeeper.firebaseapp.com",
    databaseURL: "https://myplanbookkeeper.firebaseio.com",
    projectId: "myplanbookkeeper",
    storageBucket: "myplanbookkeeper.appspot.com",
    messagingSenderId: "406863638795",
    appId: "1:406863638795:web:b217c4de98643c33d3720e",
    measurementId: "G-QJFJH8PQ6W"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
