import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const applicationCollection = collection(db, "applications");

export async function applyForJob({
  jobId,
  userId,
  company,
  title,
}) {
  const q = query(
    applicationCollection,
    where("jobId", "==", jobId),
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    throw new Error("You have already applied for this job.");
  }

  await addDoc(applicationCollection, {
    jobId,
    userId,
    company,
    title,
    status: "Applied",
    createdAt: serverTimestamp(),
  });
}

export async function getUserApplications(userId) {
  const q = query(
    applicationCollection,
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}