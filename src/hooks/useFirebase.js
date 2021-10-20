/* eslint-disable react-hooks/exhaustive-deps */
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
    const handleRegister = e => {
        console.log(email, password)
        if (password.length < 6) {
            setError("Password must be at least 6/six characters long.")
            return;
        }
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleLogin = () => {
        console.log(email, password)
        if (password.length < 6) {
            setError("Password must be at least 6/six characters long.")
            return;
        }
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
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

    return { user, error, setError, handleRegister, handleLogin, handleEmail, handlePassword, signInUsingGoogle, logOut };
}
export default useFirebase;