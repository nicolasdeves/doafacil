import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { getAuth, signInWithEmailAndPassword, signOut} from '@react-native-firebase/auth';
import { getApp } from '@react-native-firebase/app';


import { USER_COLLECTION, userFirestore, UserRequest } from './user.schema';

export async function signUpUser(email: string, password: string, name: string) {
  console.log('entrou regsitrar service try')
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    console.log('userCredential')
    console.log(userCredential)
    console.log(userCredential.user.email)

    const uid = userCredential.user.uid;
    await firestore().collection('users').doc(uid).set({
      name,
      email,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
  
    return userCredential.user;
  } catch (error: any) {
    console.log(error.message)
  }


}

export async function login(email: string, password: string) {
  const auth = getAuth(getApp()); // pega a instância atual do app
const userCredential = await signInWithEmailAndPassword(auth, email, password);
  console.log('userCredential email!!')
  console.log(userCredential)
  console.log(userCredential.user.email)
  return userCredential.user;
}

export function logoutUser() {
  console.log('logout')
  const auth = getAuth(getApp());
  return signOut(auth);
}

export function getCurrentUser() {
  return auth().currentUser;
}
