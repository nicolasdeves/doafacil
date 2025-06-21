import firestore from '@react-native-firebase/firestore';
import { USER_COLLECTION, userFirestore, UserRequest } from './user.schema';


export async function addUser(data: UserRequest) {
    await userFirestore
      .add({
        name: data.name,
        username: data.username,
      });
  }