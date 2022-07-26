// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getDatabase, ref, set } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_APP_FIREBASE_KEY,
  authDomain: process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_APP_FIREBASE_URL,
  projectId: process.env.NEXT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_APP_FIREBASE_STORAGE_URL,
  appId: process.env.NEXT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export { analytics };
// export { logEvent };
export const db = getDatabase(app);
export const storage = getStorage(app);

export async function storeMail(mail) {
  return set(ref(db, 'mail/' + Date.now()), mail);
}
