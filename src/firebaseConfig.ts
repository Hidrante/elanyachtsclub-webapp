// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Replace with your actual API Key
  authDomain: "YOUR_AUTH_DOMAIN", // Replace with your actual Auth Domain
  projectId: "YOUR_PROJECT_ID", // Replace with your actual Project ID
  storageBucket: "YOUR_STORAGE_BUCKET", // Replace with your actual Storage Bucket
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Replace with your actual Messaging Sender ID
  appId: "YOUR_APP_ID" // Replace with your actual App ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// You can also export other services like Storage if needed later
// export const storage = getStorage(app);