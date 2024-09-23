// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdsElDR6sj_QvhjcQ1VGxRhQNXw-uaIa4",
    authDomain: "buoi5-lab1-5a9b2.firebaseapp.com",
    projectId: "buoi5-lab1-5a9b2",
    storageBucket: "buoi5-lab1-5a9b2.appspot.com",
    messagingSenderId: "522306441582",
    appId: "1:522306441582:web:776687768d6f8b9251317f",
    measurementId: "G-WN711FBRQH"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };