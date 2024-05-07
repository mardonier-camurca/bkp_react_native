import firebase from  'firebase/app';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "*******",
    authDomain: "meuapp-4e8d6.firebaseapp.com",
    projectId: "meuapp-4e8d6",
    storageBucket: "meuapp-4e8d6.appspot.com",
    messagingSenderId: "736457515655",
    appId: "1:736457515655:web:347e47aaf5a69282b84e22",
    measurementId: "G-R8Y9GKGZTK"
};

if(!firebase.apps.length){
    //Abrir minha conexao
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
