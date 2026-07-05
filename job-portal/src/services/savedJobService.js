import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const savedJobsCollection = collection(db, "savedJobs");

export async function saveJob({
  jobId,
  userId,
  company,
  title,
}) {
  const q = query(
    savedJobsCollection,
    where("jobId", "==", jobId),
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    return;
  }

  await addDoc(savedJobsCollection, {
    jobId,
    userId,
    company,
    title,
  });
}

export async function unsaveJob(jobId, userId) {
  const q = query(
    savedJobsCollection,
    where("jobId", "==", jobId),
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    await deleteDoc(doc(db, "savedJobs", snapshot.docs[0].id));
  }
}

export async function getSavedJobs(userId) {
  const q = query(
    savedJobsCollection,
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function isJobSaved(jobId, userId) {
  const q = query(
    savedJobsCollection,
    where("jobId", "==", jobId),
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  return !snapshot.empty;
}