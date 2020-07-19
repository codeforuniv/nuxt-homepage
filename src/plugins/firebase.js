import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAXsWtoj5KoKf7CDE8tqwV6WL0LOZ4JfWM',
    authDomain: 'cfu-homepage.firebaseapp.com',
    databaseURL: 'https://cfu-homepage.firebaseio.com',
    projectId: 'cfu-homepage',
    storageBucket: 'cfu-homepage.appspot.com',
    messagingSenderId: '211046489890',
    appId: '1:211046489890:web:cac017fe84d81096e50f7b',
    measurementId: 'G-WBCM90JPXH'
  })
}
export default firebase
