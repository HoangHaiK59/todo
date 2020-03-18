import app from 'firebase/app';
import 'firebase/auth';

const devConfig = {
    apiKey: "AIzaSyB-cSazjO8YNUx_INqQC1xt1r-EJQU1PD8",
    authDomain: "todo-f6123.firebaseapp.com",
    databaseURL: "https://todo-f6123.firebaseio.com",
    projectId: "todo-f6123",
    storageBucket: "todo-f6123.appspot.com",
    messagingSenderId: "15763357581",
};

const prodConfig = {
    apiKey: "AIzaSyB-cSazjO8YNUx_INqQC1xt1r-EJQU1PD8",
    authDomain: "todo-f6123.firebaseapp.com",
    databaseURL: "https://todo-f6123.firebaseio.com",
    projectId: "todo-f6123",
    storageBucket: "todo-f6123.appspot.com",
    messagingSenderId: "15763357581",
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // Auth API
    doSignInWithEmailAndPassword = (email,password) => this.auth.signInWithEmailAndPassword(email, password)
    
    
    doSignout = () => this.auth.signOut();
}