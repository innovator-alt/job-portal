import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { db, storage } from "../firebase/firebase";

export async function getUserProfile(uid) {
  const docRef = doc(db, "users", uid);

  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data();
}

export async function createUserProfile(uid, data) {
  const docRef = doc(db, "users", uid);

  await setDoc(docRef, data);
}

export async function updateUserProfile(uid, data) {
  const docRef = doc(db, "users", uid);

  await updateDoc(docRef, data);
}

export function uploadResume(uid, file, onProgress) {
  return new Promise((resolve, reject) => {
    const storageRef = ref(
      storage,
      `resumes/${uid}/${Date.now()}-${file.name}`
    );

    const uploadTask = uploadBytesResumable(
      storageRef,
      file
    );

    uploadTask.on(
      "state_changed",

      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred /
            snapshot.totalBytes) *
            100
        );

        onProgress(progress);
      },

      reject,

      async () => {
        const url = await getDownloadURL(
          uploadTask.snapshot.ref
        );

        await updateUserProfile(uid, {
          resumeUrl: url,
        });

        resolve(url);
      }
    );
  });
}