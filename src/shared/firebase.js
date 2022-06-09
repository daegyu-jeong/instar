import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvjtBWPxynKsXhse0AIZMfjq5IN5s3zfE",
    authDomain: "authex-83c0d.firebaseapp.com",
    projectId: "authex-83c0d",
    storageBucket: "authex-83c0d.appspot.com",
    messagingSenderId: "337366129708",
    appId: "1:337366129708:web:244c384360703d9ab68589",
    measurementId: "G-JRSBC5KFZP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
