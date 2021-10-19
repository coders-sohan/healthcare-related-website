import { useState } from "react";
import firebaseInitializeAuth from "../Firebase/Firebase.initialize";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import { useEffect } from "react";

firebaseInitializeAuth();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	const signInWithGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// console.log(result.user);
				setUser(result.user);
			})
			.catch((error) => {
				const errorMessage = error.message;
				// console.log(errorMessage);
				setError(errorMessage);
			});
	};

	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {
				// console.log(error.message);
			});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// console.log("user already sign in", user);
				setUser(user);
			}
		});
	}, []);
	return {
		user,
		error,
		logOut,
		signInWithGoogle,
	};
};

export default useFirebase;
