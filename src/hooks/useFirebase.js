import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider)

            .catch(error => {
                setError(error.message);
            })
    }
    const logOut = () => {

        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    // observe whether user auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
            }
        });
    }, [])

    return { user, error, signInUsingGoogle, logOut };
}
export default useFirebase;