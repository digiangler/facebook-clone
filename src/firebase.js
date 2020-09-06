import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD2pzC7VXjqIkhChoEYGvvBhMiTOYtkhfU',
  authDomain: 'facebook-clone-23b2a.firebaseapp.com',
  databaseURL: 'https://facebook-clone-23b2a.firebaseio.com',
  projectId: 'facebook-clone-23b2a',
  storageBucket: 'facebook-clone-23b2a.appspot.com',
  messagingSenderId: '315572958476',
  appId: '1:315572958476:web:de62dd4de947c97fa2c529',
  measurementId: 'G-NQ9EH45RBB',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
