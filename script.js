import { initializeApp } from "https://gstatic.com";
import { getFirestore, doc, getDoc, setDoc } from "https://gstatic.com";
import { getAuth, signInAnonymously } from "https://gstatic.com";

const firebaseConfig = {
  apiKey: "AIzaSyCjZk8A8tJvUf4YmIkAy-g3_5YqhvW-3Bc",
  authDomain: "://firebaseapp.com",
  projectId: "playwithalina-d7bb3",
  storageBucket: "playwithalina-d7bb3.firebasestorage.app",
  messagingSenderId: "18244211359",
  appId: "1:18244211359:web:d10be09d3e9fbb184c88aa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

signInAnonymously(auth).then(() => { syncSystem(); }).catch(() => { fallbackUI(); });

async function syncSystem() {
  const balEl = document.getElementById("wallet-balance");
  try {
    const snap = await getDoc(doc(db, "Alinapro8826", "tek40Ts2fW291tK5AcjG"));
    if (snap.exists() && balEl) {
      balEl.innerText = "₹" + (snap.data().balance || 100);
    } else if (balEl) {
      balEl.innerText = "₹100";
    }
  } catch (e) { fallbackUI(); }
}

function fallbackUI() {
  const balEl = document.getElementById("wallet-balance");
  if (balEl) balEl.innerText = "₹100"; // Instantly removes loading text
}
