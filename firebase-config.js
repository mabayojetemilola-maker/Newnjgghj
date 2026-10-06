// Firebase configuration - Little Land Academy
const firebaseConfig = {
  apiKey: "AIzaSyCesCuRwXiRl23s-sWQZhMONbywp_y2-Hg",
  authDomain: "little-land-2f320.firebaseapp.com",
  projectId: "little-land-2f320",
  storageBucket: "little-land-2f320.firebasestorage.app",
  messagingSenderId: "570474037175",
  appId: "1:570474037175:web:6621298101ae434f14b232",
  measurementId: "G-P6RSEJ8SN3"
};

// Initialize Firebase (compat for easy script include)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Paystack public key
const PAYSTACK_PUBLIC_KEY = "pk_live_f84ba4467efff671733cdacd92bf1143dd0dae81";

// Classes offered
const CLASSES = [
  "Nursery 1", "Nursery 2", "Nursery 3",
  "Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5", "Primary 6",
  "JSS 1", "JSS 2", "JSS 3"
];

// Default subjects for results
const DEFAULT_SUBJECTS = [
  "English Language",
  "Mathematics",
  "Basic Science",
  "Social Studies",
  "Islamic Studies",
  "Hausa Language",
  "Computer Studies"
];

const TERMS = ["1st Term", "2nd Term", "3rd Term"];

// Helper: sanitize name for email
function nameToEmail(fullName) {
  return fullName.trim().toLowerCase().replace(/\s+/g, ".") + "@littleland.school";
}

// Helper: current user profile from Firestore
async function getUserProfile(uid) {
  const doc = await db.collection("users").doc(uid).get();
  return doc.exists ? doc.data() : null;
}
