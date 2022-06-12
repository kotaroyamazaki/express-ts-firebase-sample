import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
initializeApp(firebaseConfig);

export const uploadFS = (
  fileRef: string,
  fileBuf: Blob | Uint8Array | ArrayBuffer,
  onSuccsess?: () => void,
  onError?: (error: Error) => void
) => {
  const storage = getStorage();
  const storageRef = ref(storage, fileRef);

  uploadBytes(storageRef, fileBuf)
    .then(() => onSuccsess && onSuccsess())
    .catch((error) => {
      onError && onError(error);
    });
};
