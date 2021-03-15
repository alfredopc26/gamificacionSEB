// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: "AIzaSyB-jn81qNqCImVWefvIHNloTUQEjGJ27vk",
  authDomain: "sebgamify.firebaseapp.com",
  databaseURL: "https://sebgamify-default-rtdb.firebaseio.com",
  projectId: "sebgamify",
  storageBucket: "sebgamify.appspot.com",
  messagingSenderId: "143809263157",
  appId: "1:143809263157:web:dc15e69ac953ef4f72a37c",
  measurementId: "G-BTZCZTW4NQ"
};


export const environment = {
  production: false,
  firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
