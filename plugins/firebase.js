import * as firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCE6JSszZdh5Dhm-0zraI6WB2NEH48Yl2U",
    authDomain: "proyectosoftware2-aca1e.firebaseapp.com",
    databaseURL: "https://proyectosoftware2-aca1e.firebaseio.com",
    projectId: "proyectosoftware2-aca1e",
    storageBucket: "proyectosoftware2-aca1e.appspot.com",
    messagingSenderId: "632272262751",
    appId: "1:632272262751:web:50a8b41322a264e230adea"
  };

  let app = nil;

  if (!firebase.apps.length) {
      app = firebase.initializeApp(firebaseConfig);
  }

export default firebase;