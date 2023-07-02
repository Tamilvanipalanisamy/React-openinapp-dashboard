import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA1XQyKT6h8XnPW-L9dflAVeWEcy3ooj1g',
  authDomain: 'dashboard-706e1.firebaseapp.com',
  projectId: 'dashboard-706e1',
  storageBucket: 'dashboard-706e1.appspot.com',
  messagingSenderId: '3645866537',
  appId: '1:3645866537:web:ea1fde2ffd81bf9caad238',
  measurementId: 'G-JQLQDD3QEG',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}
