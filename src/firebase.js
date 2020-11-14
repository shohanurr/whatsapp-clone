import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA935loj0nh-1w-QCmpEOdfqBhZCX0yP6Q",
    authDomain: "whatsapp-clone-317eb.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-317eb.firebaseio.com",
    projectId: "whatsapp-clone-317eb",
    storageBucket: "whatsapp-clone-317eb.appspot.com",
    messagingSenderId: "358777787172",
    appId: "1:358777787172:web:929559d5e19356c44559b1",
    measurementId: "G-LW3FZTS92P"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.
  GoogleAuthProvider();

  export { auth, provider };
  export default db; 