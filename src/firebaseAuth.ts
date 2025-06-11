import { auth } from './firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';

// Function to sign up a new user with email and password
export const signupUser = async (email: string, password: string): Promise<User | null> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Signed up
    const user = userCredential.user;
    console.log('User signed up:', user);
    return user;
  } catch (error: any) {
    console.error('Error signing up:', error.message);
    // Handle specific errors (e.g., weak-password, email-already-in-use)
    throw error; // Re-throw the error for the calling component to handle
  }
};

// Function to log in an existing user with email and password
export const loginUser = async (email: string, password: string): Promise<User | null> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Signed in
    const user = userCredential.user;
    console.log('User logged in:', user);
    return user;
  } catch (error: any) {
    console.error('Error logging in:', error.message);
    // Handle specific errors (e.g., user-not-found, wrong-password)
    throw error; // Re-throw the error for the calling component to handle
  }
};

// Function to log out the current user
export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log('User logged out');
  } catch (error: any) {
    console.error('Error logging out:', error.message);
    throw error; // Re-throw the error for the calling component to handle
  }
};

// Observer to track authentication state changes
// This function takes a callback that will be executed whenever the auth state changes
export const subscribeToAuthChanges = (callback: (user: User | null) => void): () => void => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    callback(user);
  });
  // Return the unsubscribe function to stop observing auth state changes
  return unsubscribe;
};