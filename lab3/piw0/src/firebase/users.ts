import {
  AuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

const logInWithProvider = async (provider: AuthProvider) => {
  try {
    await signInWithPopup(auth, provider);
  } catch (err: any) {
    console.error({ err });
    alert(err.message);
  }
};

const googleProvider = new GoogleAuthProvider();
export const logInWithGoogle = async () => {
  logInWithProvider(googleProvider);
};

const facebookProvider = new FacebookAuthProvider();
export const loginWithFacebook = async () => {
  logInWithProvider(facebookProvider);
};

export const logout = () => {
  signOut(auth);
};
