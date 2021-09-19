/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { schedulerOrder } from '../scheduler/scheduler';

require('dotenv').config();

const firebase = require('firebase');

firebase.initializeApp({
  apiKey: process.env.firebase_key,
  authDomain: process.env.firebase_domain,
  projectId: process.env.firebase_project_id,
  storageBucket: process.env.firebase_storage_bucket,
  messagingSenderId: process.env.firebase_sender_id,
  appId: process.env.firebase_app_id,
  measurementId: process.env.firebase_measurement_id,
});
const db = firebase.firestore();

// databases
const userAccount = db.collection('UserAccount');
const gameAccount = db.collection('GameAccount');
const scheduler = db.collection('Scheduler');
const lootAssistant = db.collection('TwLootAssistant');
const villageExplorer = db.collection('TwVillagesExplorer');

// Return account ID
export async function getId(email: String): Promise<String> {
  // TODO: Search if there is a prettier way
  let userID : String = '';
  try {
    const userRef = await userAccount.where('email', '==', email).get();
    if (userRef.empty) {
      userID = 'No matching documents.';
    }
    userRef.forEach((doc: { data: () => any; }) => {
      const query = doc.data();
      userID = query.uid;
    });
  } catch (err) {
    console.log(err);
    userID = 'No matching documents.';
  }
  return userID;
}

// Return Scheduler ID
export async function getScheduler(userID: String): Promise<any> {
  let content: String = '';
  try {
    const schedulerQuery = await scheduler.where('owner', '==', userID).get();
    if (schedulerQuery.empty) {
      content = 'No matching documents.';
    }
    content = schedulerOrder(schedulerQuery);
  } catch (err) {
    console.log(err);
    content = 'No matching documents.';
  }
  return content;
}
