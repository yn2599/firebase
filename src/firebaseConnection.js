import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyDZzi06dweWObxafds5iNdhmy03bbupDLc",
    authDomain: "curso-801a7.firebaseapp.com",
    projectId: "curso-801a7",
    storageBucket: "curso-801a7.appspot.com",
    messagingSenderId: "307531138670",
    appId: "1:307531138670:web:2ce7e8e90ef7c2764a087f",
    measurementId: "G-QCMNTTZQ35"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp)

export { db, auth }
