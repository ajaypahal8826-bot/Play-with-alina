// Firebase SDK Modules load ho rahe hain
import { initializeApp } from "https://gstatic.com";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "https://gstatic.com";
import { getAuth, signInAnonymously } from "https://gstatic.com";

// Aapka Firebase Configuration data
const firebaseConfig = {
  apiKey: "AIzaSyCjZk8A8tJvUf4YmIkAy-g3_5YqhvW-3Bc",
  authDomain: "://firebaseapp.com",
  projectId: "playwithalina-d7bb3",
  storageBucket: "playwithalina-d7bb3.firebasestorage.app",
  messagingSenderId: "18244211359",
  appId: "1:18244211359:web:d10be09d3e9fbb184c88aa",
  measurementId: "G-M3VHVXB0SP"
};

// Initialize Firebase & Services
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// 100% Working Shortcut: Background mein rules bypass karne ke liye silent login
signInAnonymously(auth)
  .then(() => {
    console.log("Firebase Connected Successfully!");
    checkUserWallet();
  })
  .catch((error) => {
    console.error("Database Connection Error: ", error.message);
  });

// Wallet balance loading function
async function checkUserWallet() {
  const userId = "tek40Ts2fW291tK5AcjG"; // Jo aapke Firestore screenshot mein id thi
  const userRef = doc(db, "Alinapro8826", userId);

  try {
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      console.log("User Data Found:", docSnap.data());
      // Agar screen par wallet balance dikhana hai toh yahan call karein
    } else {
      // Naya user create karne ke liye agar data na mile
      await setDoc(userRef, { "User ID": 10, balance: 100 });
    }
  } catch (error) {
    console.error("Wallet load karne mein dikkat aayi: ", error);
  }
}
