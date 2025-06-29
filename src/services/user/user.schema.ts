import { z } from "zod";
import firestore from '@react-native-firebase/firestore';

// export const USER_COLLECTION = 'users'
// export const userFirestore = firestore().collection(USER_COLLECTION);

export const userRequestSchema = z.object({
    name: z.string(),
    username: z.string(),
    password: z.string()
})

export type UserRequest = z.infer<typeof userRequestSchema>;