// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV3XRWggsF9cbzjrM3pOxNQr7vxFYMpJw",
  authDomain: "borrow-return-equipment.firebaseapp.com",
  projectId: "borrow-return-equipment",
  storageBucket: "borrow-return-equipment.appspot.com",
  messagingSenderId: "442692056635",
  appId: "1:442692056635:web:9cd92437986dedd3cb0e1e",
  measurementId: "G-4VG6FH36JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getStudent(db) {
    const Student = collection(db, 'Student');
    const StudentSnapshot = await getDocs(Student);
    const StudentList = StudentSnapshot.docs.map(doc => doc.data());
    return StudentList;
  }

  console.log(getStudent(db))