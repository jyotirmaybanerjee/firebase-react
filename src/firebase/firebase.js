import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA_nokO9HRRyQRpzSf41cXUvAcI1fTCEDY",
  authDomain: "zenklub-appointment-scheduler.firebaseapp.com",
  databaseURL: "https://zenklub-appointment-scheduler.firebaseio.com",
  projectId: "zenklub-appointment-scheduler",
  storageBucket: "zenklub-appointment-scheduler.appspot.com",
  messagingSenderId: "862397233064",
  appId: "1:862397233064:web:7ca22d72ac3a0c8a598f9d"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
