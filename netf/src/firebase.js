import firebase from "firebase"
const firebaseConfig = {
  //your firebase config
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const  provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();
export{auth,provider,storage};
export default db;