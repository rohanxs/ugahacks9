import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, addDoc, GeoPoint, setDoc, getDoc, getDocs } from "firebase/firestore";

import { writeFile } from 'fs';

let fileName = './loadedUser.json';

// public db information, safe to show on front end
const firebaseConfig = {
  apiKey: "AIzaSyAXID15tOsgajnQM64QoySUgdC2DXB7YWs",
  authDomain: "squashdb.firebaseapp.com",
  projectId: "squashdb",
  storageBucket: "squashdb.appspot.com",
  messagingSenderId: "336976153442",
  appId: "1:336976153442:web:c5a51c035dd030bc917a3b",
  measurementId: "G-C8PQ4P4X23"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore();

// secure login
const usert = await getDoc(doc(db, "logins", "0YdmuBlQkbuhTUABT1S8", "preferences", "preferences"));

async function getUserPreferences() {
  return usert.data();
}

const outputFile = require(fileName);

writeFile(fileName, JSON.stringify(outputFile), function writeJSON(err) {
  if (err) {
    return console.log(err);
  }

  console.log(JSON.stringify(file));
  console.log('writing to ' + fileName);
});

