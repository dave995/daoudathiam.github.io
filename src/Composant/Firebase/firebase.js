import app from 'firebase/app'
import 'firebase/auth'
import "firebase/database";
import firebase from 'firebase';



var config = {
  apiKey: "AIzaSyBXubWLYjynheiX74E4bJOa8TlaDCEi_eg",
  authDomain: "projetbakeli-7872d.firebaseapp.com",
  projectId: "projetbakeli-7872d",
  storageBucket: "projetbakeli-7872d.appspot.com",
  messagingSenderId: "394982801588",
  appId: "1:394982801588:web:072b75532e80b3cbe497e1"
}



firebase.initializeApp(config);



class Firebase{
    constructor(){
        this.auth = app.auth();

        this.db = app.database();

    }

    signUpser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email,  password)

    loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => 
    this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);

  

    
      user = uid => this.db.ref(`users/${uid}`);
      users = () => this.db.ref('users');

      Cour = uid => this.db.ref(`Cours/${uid}`);
      Cours = () => this.db.ref('Cours');

      Cours2 = uid => this.db.ref(`Cours2/${uid}`);
      Cours2 = () => this.db.ref('Cours2');

      DetailApprenant = uid => this.db.ref(`DetailApprenant/${uid}`);
      DetailApprenants = () => this.db.ref('DetailApprenant');

}




export default Firebase;