import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const jobsCollection = collection(db, "jobs");

export async function createJob(job) {
  const docRef = await addDoc(jobsCollection, {
    ...job,
    createdAt: new Date(),
  });

  return docRef.id;
}

export async function getRecruiterJobs(uid) {
  const q = query(
    jobsCollection,
    where("recruiterId", "==", uid)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function updateRecruiterJob(id, data) {
  await updateDoc(doc(db, "jobs", id), data);
}

export async function deleteRecruiterJob(id) {
  await deleteDoc(doc(db, "jobs", id));
}