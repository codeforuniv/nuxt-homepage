import firebase from 'firebase'

const serviceAccount = require('~/../serviceAccountKey.json')

if (!firebase.apps.length) {
  firebase.initializeApp({ ...serviceAccount })
}
export default firebase
