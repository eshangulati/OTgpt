// firebaseAPIs/auth.ts
import { auth, GoogleAuthProvider, signInWithPopup } from '../config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        console.error("Error during Google SignIn:", error);
        throw error;
    }
};

export const createNewUserWithEmail = async (email: string, password: string, name: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Optionally, update user profile here if you want to store the name
        if (user) {
            // Assuming you have a function to update the user profile
            // await updateUserProfile(user, { displayName: name });
            console.log("User created with name:", name);
        }
        return user;
    } catch (error) {
        console.error("Error creating user with email and password:", error);
        throw error;
    }
};
